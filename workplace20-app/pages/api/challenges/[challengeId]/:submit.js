import authCheck from 'lib/auth-checker';
import dbhelper from 'lib/database';
import debug from 'debug'
import {
    getSession
} from 'next-auth/client';
import skillList from '_data/skill.json'
import challengeList from '_data/challenges.json'
const log = debug('challanges/:submit')

import {
    Profile
} from 'controllers/profile'

import {
    Challenge
} from 'controllers/challenge'

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

    const challengeId = req.query.challengeId;
    const session = await getSession({
        req
    })

    if (!challengeId) {
        res.status(400).send('Invalid challenge code')
        return
    }

    log(session)

    const profileCollection = await dbhelper.collectionFor('profiles')

    const profileDomain = new Profile(profileCollection, session.user.email)

    log(profileDomain.debugInfo())

    const [

        challenge,
        error
    ] = await profileDomain.getNextLevelOf(challengeId)

    if (error) {

        res.status(400).send(error)
        return
    }

    const challengeCollection = await dbhelper.collectionFor('challenges')
    const challengeDomain = new Challenge(challengeCollection)

    const [passed, submitError] = await challengeDomain.submit(challenge, session.user.email)

    if (submitError) {
        res.status(400).send(submitError)
        return
    }

    if (passed) {
        await profileDomain.setSkill(challenge.challengeId, challenge.level)
    }

    res.status(200).send({
        passed: passed
    })
}
