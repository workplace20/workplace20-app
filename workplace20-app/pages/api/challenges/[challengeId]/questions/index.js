import authCheck from 'lib/auth-checker';
import dbhelper from 'lib/database';
import {
    ValidationError,
    Create
} from 'lib/error'
import {
    getSession
} from 'next-auth/client';
import {
    Profile
} from 'controllers/profile'
import {
    Challenge
} from 'controllers/challenge'

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
    const challengeId = req.query['challengeId']
    const session = await getSession({
        req
    })

    let validatorError = Create(res)

    const challengeCollection = await dbhelper.collectionFor('challenges')
    const challengeDomain = new Challenge(challengeCollection)

    const profileCollection = await dbhelper.collectionFor('profiles')
    const profileDomain = new Profile(profileCollection, session.user.email)

    const profile = await profileDomain.Get()

    if (!profile) {
        validatorError.endWith( 400, 'Profile not found')
        return
    }

    const [nextChallenge, error] = await profileDomain.getNextLevelOf(challengeId)

    if (error) {
        validatorError.endWith( 400, error)
        return
    }

    const challenge = await challengeDomain.getChallenge(
        challengeId,
        nextChallenge.level,
        session.user.email)

    if (challenge) {
        res.status(200).send(challenge)
        return
    }

    validatorError.endWith( 404, 'Not found')
}
