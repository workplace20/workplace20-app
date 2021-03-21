import dbhelper from "lib/database";
import debug from "debug";
import authCheck from "lib/auth-checker";
import { getSession } from "next-auth/client";
import { Profile } from "controllers/profile";
import { Job } from "controllers/job";
import { ValidationError, Create } from "lib/error";

const Logger = debug("Route|Id|Job");

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			await authCheck(req, res, handleGet);
			break;
		case "PUT":
			await authCheck(req, res, handlePut);
			break;
		default:
			res.status(405).send("Method not support");
			break;
	}
}

async function handleGet(req, res) {
	const { id } = req.query;

	Logger("Find " + id);

	const session = await getSession({
		req,
	});

	const jobCollection = await dbhelper.collectionFor("jobs");
	const jobCtr = new Job(jobCollection);

	const [job, error] = await jobCtr.getById(id);

	if (error) {
		res.status(400).send(error);
		return;
	}
	if (!job) {
		res.status(404).send("Not found");
		return;
	}

	res.status(200).send(job);
}

async function handlePut(req, res) {
	const { id } = req.query;

	const session = await getSession({
		req,
	});

	let validateError = Create(res);

	const profileCollection = await dbhelper.collectionFor("profiles");
	const jobCollection = await dbhelper.collectionFor("jobs");
	const jobCtr = new Job(jobCollection);

	const profileCtr = new Profile(profileCollection, session.user.email);
	const profile = await profileCtr.Get();

	if (!profile) {
		validateError.endWith(400, "Invalid account");
		return;
	}

	const [job, error] = await jobCtr.update(id, profile, req.body);
	if (error) {
		validateError.endWith(400, error);
		return;
	}
	res.status(200).send(job);
}
