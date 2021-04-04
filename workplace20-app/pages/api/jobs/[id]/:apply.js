import authCheck from 'lib/auth-checker';

export default async function handler(req, res) {
	switch (req.method) {
		case "POST":
			await authCheck(req, res, handlePost);
			break;
		default:
			res.status(405).send("Method not support");
			break;
	}
}

async function handlePost(req, res) {
	const { id } = req.query;

	res.status(200).send({});
}
