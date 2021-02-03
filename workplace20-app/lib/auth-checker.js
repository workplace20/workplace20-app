import { getSession } from 'next-auth/client';

const secret = process.env.SECRET;

export default async function authCheck(req, res, next) {
    const session = await getSession({ req })

    if (!session) {
        res.status(401).send()
        return
    }

    await next(req, res)
}