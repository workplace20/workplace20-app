import dbhelper from "lib/database";
import debug from "debug";
import authCheck from "lib/auth-checker";
import { getSession } from "next-auth/client";
import { Profile } from "controllers/profile";
import { Job } from "controllers/job";
import { ValidationError, Create } from "lib/error";

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			await authCheck(req, res, handleGet);
			break;
		case "POST":
			await authCheck(req, res, handlePost);
			break;
		default:
			res.status(405).send("Method not support");
			break;
	}
}

async function handleGet(req, res) {
	const { cursor, type } = req.query;

	const session = await getSession({
		req,
	});

	const jobCollection = await dbhelper.collectionFor("jobs");
	const jobCtr = new Job(jobCollection);

	const [jobResult, error] = await jobCtr.getList(
		session.user.email,
		type,
		cursor,
		100 // Page Size is 100
	);
	if (error) {
		res.status(400).send(error);
		return;
	}

	if (!jobResult?.data || jobResult?.data?.length == 0) {
		res.status(200).send({ data: [], nextCursor: null });
		return;
	}

	res.status(200).send(jobResult);
}

async function handlePost(req, res) {
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

	const [job, error] = await jobCtr.create(profile, req.body);
	if (error) {
		validateError.endWith(400, error);
		return;
	}

	if (!profile.jobCreated) {
		await profileCtr.setJobCreated();
	}

	res.status(200).send(job);
}
