import skillList from "_data/skill.json";
import challengeList from "_data/challenges.json";
import debug from "debug";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { ObjectId } from "mongodb";
const ajv = new Ajv({ removeAdditional: true });
addFormats(ajv);
const Logger = debug("Controller|Job");
const createJobScheme = {
	type: "object",
	properties: {
		description: { type: "string" },
		english: { enum: ["Beginner", "Intermediate", "Advanced"] },
		introduction: { type: "string" },
		level: {
			enum: ["Beginner", "Average", "Skilled", "Specialist", "Expert"],
		},
		requiredSkills: {
			type: "array",
			uniqueItems: true,
			minItems: 1,
			items: { type: "string" },
		},
		title: { type: "string" },
	},
	required: ["description", "english", "level", "requiredSkills", "title"],
	additionalProperties: false,
};

const log = debug("profile controller");

export class Job {
	constructor(collection) {
		this.collection = collection;
	}

	async create(profile, jobData) {
		const { email } = profile;

		let validate = ajv.compile(createJobScheme);

		if (!validate(jobData)) {
			return [null, validate.errors];
		}

		const jobForInsert = Object.assign(
			{ email: email, type: "active" },
			jobData
		);
		const result = await this.collection.insertOne(jobForInsert);
		if (result.insertedCount == 1) {
			return [result.ops[0], null];
		}
		return [null, "Unknow error when persistent data"];
	}
	async getList(email, type, currentCursor, pageSize) {
		/*
		 * {
		 *   data:[],
		 *   nextCursor: lastId
		 * }
		 */
		const query = {
			email: email,
			type: type,
		};

		if (currentCursor && currentCursor != 0) {
			if (ObjectId.isValid(currentCursor)) {
				query._id = {
					$gt: ObjectId(currentCursor),
				};
			} else {
				return [
					null,
					"We have contracted. But look! you sent me '" +
						currentCursor +
						"' as the cursor and this is invalid value, so you credited a 🍌🍌.",
				];
			}
		}

		Logger(query);

		const result = await this.collection
			.find(query)
			.sort({ _id: 1 })
			.limit(pageSize)
			.toArray();

		Logger(result);

		let listObj = {
			data: result,
		};

		if (result?.length > 0) {
			listObj.nextCursor = result[result.length - 1]._id;
		}

		return [listObj, null];
	}
}
