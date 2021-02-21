import authCheck from 'lib/auth-checker';
import dbhelper from 'lib/database';
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


    const challengeCollection = await dbhelper.collectionFor('challenges')
    const challengeDomain = new Challenge(challengeCollection)

    const profileCollection = await dbhelper.collectionFor('profiles')
    const profileDomain = new Profile(profileCollection, session.user.email)

    const profile = await profileDomain.Get()

    if (!profile) {
        res.status(400).send('Profile not found')
        return
    }

    const [nextChallenge,error] = await profileDomain.getNextLevelOf(challengeId)

    if(error){ 
        res.status(400).send(error)
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
    res.status(404).send('Not found')
}

