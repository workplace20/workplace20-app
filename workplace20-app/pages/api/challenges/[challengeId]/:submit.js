import authCheck from 'lib/auth-checker';

export default async function handler(req, res) {
  switch (req.method) {
    case 'PUT':
      await authCheck(req, res, handlePut)
      break
    default:
      res.status(405).send("Method not support")
      break
  }
}

async function handlePut(req, res) {
  res.status(200).send();
}