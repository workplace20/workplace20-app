import jwt from 'next-auth/jwt'

const secret = process.env.SECRET

export default async function authCheck(req, res, next) {
    const token = await jwt.getToken({ req, secret })
    if (!token) {
        res.status(401).send()
        return
    }

    await next(req, res)
}