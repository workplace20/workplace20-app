import authCheck from 'lib/auth-checker';
import debug from 'debug'
import {
    Challenge
} from 'controllers/challenge'
import dbHelper from 'lib/database'
import {
    ValidationError,
    Create
} from 'lib/error'
const logger = debug('challenges/questions/answers')

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
    const answers = req.body;
    const {
        questionId,
        challengeId
    } = req.query;

    logger(req.query)
    logger(answers)

    const challengeCollection = await dbHelper.collectionFor('challenges')

    const challengeCtl = new Challenge(challengeCollection)

    logger('before call answer')
    const [challenge, error] = await challengeCtl.answer(questionId, answers)

    const validatorError = Create(res)

    logger('answer completed')
    logger(challenge)

    if (error) {
        validatorError.endWith(400, error)
        return
    }

    if (!challenge) {
        validatorError.endWith(400, 'Invalid challenge code')
        return
    }

    const question = challenge?.questions?.find(q => q.id == questionId)

    logger(question)

    if (!question) {
        validatorError.endWith(400, 'Invalid question')
        return
    }
    res.status(200).send(question)
}
