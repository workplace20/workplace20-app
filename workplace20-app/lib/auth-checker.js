import { getSession } from "next-auth/client";

export default async function authCheck(req, res, next) {
	const session = await getSession({ req });
	if (!session) {
		res.status(401).send("Unauthorized");
		return;
	}

	await next(req, res);
}
