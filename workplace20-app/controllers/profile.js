import skillList from "_data/skill.json";
import challengeList from "_data/challenges.json";
import debug from "debug";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ removeAdditional: true });
addFormats(ajv);

const log = debug("profile controller");

export class Profile {
	constructor(collection, email) {
		this.collection = collection;
		this.email = email;
	}

	debugInfo() {
		if (this.collection) {
			return "Look good!";
		} else return "Not found collection";
	}
	async setJobCreated() {
		await this.collection.updateOne(
			{ email: this.email },
			{
				$set: { jobCreated: true },
			},
			{ upsert: false }
		);
	}

	async update(data) {
		const errors = [];

		const { kind } = data;
		let updater = data;
		let profile = await this._getProfile();

		let shouldUpdateProfileKindOnly = false;
		if (!profile.kind) {
			// we only change kind one time
			if (kind && ["business", "creator"].indexOf(kind) >= 0) {
				updater.kind = kind;
				shouldUpdateProfileKindOnly = true;
			} else {
				errors.push({
					message:
						"Property 'kind' required in range [business,creator]",
				});
			}
		} else {
			data.kind = profile.kind;
		}

		let validate;

		if (shouldUpdateProfileKindOnly == false) {
			if (data.kind == "creator") {
				validate = ajv.compile(updateCreatorProfileSchema);
			} else {
				validate = ajv.compile(updateBusinessProfileSchema);
			}

			if (!validate(data)) {
				return [null, validate.errors];
			}
			if (errors.length > 0) {
				[null, error];
			}
		}

		await this.collection.updateOne(
			{
				email: this.email,
			},
			{
				$set: data,
			},
			{
				upsert: false,
			}
		);

		profile = await this._getProfile();

		return [profile, null];
	}

	async _getProfile() {
		const profile = await this.collection.findOne({
			email: this.email,
		});

		return profile;
	}

	async Get() {
		return await this._getProfile();
	}

	async setSkill(challengeId, level, score) {
		const profile = await this._getProfile();
		if (!profile) {
			return [null, "Profile not found"];
		}

		if (challengeId == "general") {
			await this.collection.updateOne(
				{
					email: this.email,
				},
				{
					$set: {
						generalChallengeCompleted: true,
					},
				}
			);
			return;
		}

		if (score < 90) {
			[null, "You have to pass 90% of questions to get the skill"];
		}

		let profileSkill = profile.skillMatrix[challengeId];

		let newSkill = {};

		newSkill[challengeId] = {
			level: level,
		};

		await this.collection.updateOne(
			{
				email: this.email,
			},
			{
				$set: {
					skillMatrix: Object.assign(profile.skillMatrix, newSkill),
				},
			}
		);
	}

	async getNextLevelOf(challengeId) {
		const profile = await this._getProfile();
		if (!profile) {
			return [null, "Profile not found"];
		}

		if (challengeId == "general" && profile.generalChallengeCompleted) {
			return [null, "You have completed this challenge"];
		}

		let levelOfChallenge = profile.skillMatrix[challengeId];

		if (!levelOfChallenge || !levelOfChallenge.level) {
			log(`Profile ${this.email} start with default level Basic`);

			levelOfChallenge = {
				level: "Beginner",
			};
		}

		log(`Profile kind ${profile.kind}`);

		const nextLevel = nextLevelOfChallenge(
			profile.kind,
			challengeId,
			levelOfChallenge.level
		);

		if (!nextLevel) {
			return [null, "Challenge is not supported"];
		}

		if (nextLevel == levelOfChallenge.level && nextLevel != "Beginner") {
			// User reached all level
			return [null, "User is reached max level"];
		}

		log(
			`Current level of profile for skill ${challengeId} is ${levelOfChallenge.level}`
		);

		log(`next level for skill ${challengeId} is ${nextLevel}`);

		const challenge = challengeList.find(
			(el) =>
				el.challengeId == challengeId &&
				el.level == nextLevel &&
				(!el.kind || el.kind == profile.kind)
		);

		log(
			`Challenge kind ${challenge?.kind} vs Profile kind ${profile.kind}`
		);

		if (!challenge) {
			return [null, "Challenge is not support"];
		}
		return [challenge, null];
	}
}

function nextLevelOfChallenge(profileKind, challengeCode, currentLevel) {
	const skill = skillList.skills.find(
		(el) => el.code == challengeCode && (!el.kind || el.kind == profileKind)
	);

	if (!skill) {
		return "";
	}

	const indexCurrentLevel = skill.levels.indexOf(currentLevel);

	if (indexCurrentLevel < 0) {
		return skill.levels[0];
	}

	if (indexCurrentLevel == skill.levels.length - 1) {
		return currentLevel;
	}

	return skill.levels[indexCurrentLevel + 1];
}

const updateCreatorProfileSchema = {
	type: "object",
	properties: {
		kind: { enum: ["creator"] },
		email: { type: "string" },
		jobAvailable: { type: "boolean" },
		name: { type: "string" },
		skype: { type: "string" },
		dateOfBirth: { type: "string", format: "date" },
		phoneNumber: { type: "string" },
		address: { type: "string" },
		about: { type: "string" },
		contactEmail: { type: "string", format: "email" },
		country: { type: "string" },
		website: { type: "string" },
	},
	required: ["kind", "name"],
	additionalProperties: false,
};

const updateBusinessProfileSchema = {
	type: "object",
	properties: {
		kind: { enum: ["business"] },
		email: { type: "string" },
		jobAvailable: { type: "boolean" },
		name: { type: "string" },
		skype: { type: "string" },
		dateOfBirth: { type: "string", format: "date" },
		phoneNumber: { type: "string" },
		address: { type: "string" },
		about: { type: "string" },
		businessName: { type: "string" },
		contactEmail: { type: "string", format: "email" },
		country: { type: "string" },
		yearFounded: { type: "number" },
		companySize: { type: "string" },
		companyType: { type: "string" },
		website: { type: "string" },
	},
	required: ["kind", "businessName", "website", "companySize", "companyType"],
	additionalProperties: false,
};
