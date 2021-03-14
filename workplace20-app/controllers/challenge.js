const crypto = require("crypto");
import debug from "debug";

const log = debug("challenge controller");

export class Challenge {
	constructor(collection) {
		this.collection = collection;
	}

	debugInfo() {
		if (this.collection) {
			return "Look good!";
		} else return "Not found collection";
	}

	async answer(questionId, answers) {
		log("calling answer");
		const firstAnswer = answers && answers.length > 0 && answers[0];

		const currentDate = new Date();
		const query = {
			"questions.id": questionId,
			"questions.options.id": firstAnswer,
		};

		log("find by", query);
		const challenge = await this.collection.findOne(query);

		if (!challenge) return [null, "invalid challenge"];

		log("challenge before answer", challenge);

		let question = challenge.questions?.find((c) => c.id == questionId);
		if (!question) {
			return [null, "invalid question"];
		}

		question.options = question.options.map((opt) => {
			if (answers?.find((a) => a == opt.id) != null) opt.answer = true;
			else opt.answer = false;
			return opt;
		});

		log("question after answer", question);

		const commandResult = await this.collection.updateOne(query, {
			$set: {
				"questions.$.options": question.options,
			},
		});
		log("updated answers");
		log(commandResult.result);

		return [cleanAnswers(challenge), null];
	}

	async getChallenge(challengeId, level, email) {
		const currentDate = new Date();

		log(`find for ${currentDate.toUTCString()}, ${challengeId}, ${level},
					${email}`);

		const challenge = await this.collection.findOne(
			{
				email: email,
				expireTime: {
					$gt: currentDate,
				},
				challengeId: challengeId,
				level: level,
			},
			projectionIgnoreIdField
		);

		log(`Found challenge level ${challenge?.level}`);
		return cleanAnswers(challenge);
	}

	async start(email, challenge) {
		const currentDate = new Date();

		const existedChallenge = await this.collection.findOne({
			email: email,
			expireTime: {
				$gt: currentDate,
			},
			challengeId: challenge.challengeId,
			level: challenge.level,
		});

		if (existedChallenge) {
			log("Find old challenge still available");
			log("Current time is " + currentDate.toUTCString());
			log(existedChallenge);

			return [cleanAnswers(existedChallenge), null];
		}

		const hmac = crypto.createHash("sha256");

		// Snapshot challenge to avoid change origin data, also encrypt question and options identify
		//

		const expireTime = new Date(
			currentDate.getTime() + challenge.time * 60 * 1000
		);
		let snapshotChallenge = Object.assign(
			{
				email: email,
				expireTime: expireTime,
			},
			challenge
		);

		snapshotChallenge.questions =
			snapshotChallenge.questions &&
			snapshotChallenge.questions.map((q) =>
				Object.assign({
					id: q.id,
					kind: q.kind,
					question: q.question,
					options:
						q.options &&
						q.options.map((o) => {
							hmac.update("" + new Date().getTime());

							return {
								id: hmac.copy().digest("hex"),
								value: o.value,
								correct: o.correct,
								answer: false,
							};
						}),
				})
			);

		await this.collection.insertOne(snapshotChallenge);

		// clean answers for user
		const cleanVersion = cleanAnswers(snapshotChallenge);
		return [cleanVersion, null];
	}

	// return [passed, error]
	//
	async submit(challengeData, email) {
		// 1. get challenge, if not, return error
		// 2. calculate score
		// 3. return pass/failed

		const currentDate = new Date();

		const challenge = await this.collection.findOne({
			challengeId: challengeData.challengeId,
			level: challengeData.level,
			email: email,
			expireTime: {
				$gt: currentDate,
			},
		});

		if (!challenge) {
			return [null, "Challenge is not found"];
		}

		const totalQuestion = challenge.questions.length;
		if (totalQuestion == 0) {
			return [null, "Found 0 question in challenge."];
		}

		let correct = 0;
		for (const question of challenge.questions) {
			let pass = false;
			if (question.kind == "options") {
				pass =
					question.options?.find((o) => o.answer == o.correct) !=
					null;
			} else {
				pass =
					question.options?.find((o) => o.answer != o.correct) !=
					null;
			}
			log("question", question);
			log("pass:", pass);

			if (pass) {
				correct = correct + 1;
			}
		}

		log("correct " + correct + " total: " + totalQuestion);

		const score = (correct / totalQuestion) * 100;
		return [score, null];
	}
}

function cleanAnswers(challenge) {
	if (!challenge) {
		return;
	}

	let cleanVersion = Object.assign({}, challenge);

	cleanVersion.questions =
		challenge.questions &&
		challenge.questions.map((q) =>
			Object.assign({
				id: q.id,
				kind: q.kind,
				question: q.question,
				options:
					q.options &&
					q.options.map((o) => {
						return {
							id: o.id,
							value: o.value,
						};
					}),
			})
		);

	return cleanVersion;
}
const projectionIgnoreIdField = {
	projection: {
		_id: 0,
	},
};
