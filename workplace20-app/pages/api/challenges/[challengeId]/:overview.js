import authCheck from 'lib/auth-checker';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await authCheck(req, res, handleGet)
      break
    default:
      res.status(405).send("Method not support")
      break
  }
}

async function handleGet(req, res) {
  res.status(200).send({
    description: 'Please take a few minutes to share us about yourself and your working experience.',
    totalQuestion: 10,
    totalTime: 30 // minutes
  })
}