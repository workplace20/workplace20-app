import authCheck from 'lib/auth-checker';
import dbhelper from 'lib/database';
import debug from 'debug'
import {
    getSession
} from 'next-auth/client';
import skillList from '_data/skill.json'
import challengeList from '_data/challenges.json'
import {
    ValidationError,
    Create
} from 'lib/error'
import {
    Profile
} from 'controllers/profile'
const log = debug('challanges/:overview')

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

    const challengeId = req.query.challengeId;
    const session = await getSession({
        req
    })


    let validatorError = Create(res)

    if (!challengeId) {

		validatorError.endWith(400,'Invalid challenge code')
        return
    }

    const profileCollection = await dbhelper.collectionFor('profiles')
    const profile = new Profile(profileCollection,session.user.email)

    const [

        challenge,
        error
    ] = await profile.getNextLevelOf(challengeId)

    if (error) {
		validatorError.endWith(400,error)
        return
    }

    res.status(200).send({
        description: challenge.description,
        totalQuestion: challenge.questions.length,
        totalTime: challenge.time
    })
}

