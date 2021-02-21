const crypto = require('crypto');
import debug from 'debug'

const log = debug('profile controller')

export class Challenge {
    constructor(collection) {
        this.collection = collection
    }

    debugInfo() {
        if (this.collection) {
            return "Look good!"
        } else
            return "Not found collection"
    }

    async getChallenge(challengeId, level, email) {
        const currentDate = new Date();

        log(`find for ${currentDate.toUTCString()}, ${challengeId}, ${level}, ${email}`)

        const challenge = await this.collection.findOne({
            email: email,
            expireTime: {
                $gt: currentDate
            },
            challengeId: challengeId,
            level: level
        }, projectionIgnoreIdField)

        log(`Found challenge level ${challenge?.level}`)
        return cleanAnswers(challenge);
    }
    async start(email, challenge) {

        const currentDate = new Date();

        const existedChallenge = await this.collection.findOne({
            email: email,
            expireTime: {
                $gt: currentDate
            },
            challengeId: challenge.challengeId,
            level: challenge.level
        })

        if (existedChallenge) {

            log('Find old challenge still available')
            log('Current time is ' + currentDate.toUTCString())
            log(existedChallenge)

            return [cleanAnswers(existedChallenge), null]
        }

        const hmac = crypto.createHash('sha256');

        // Snapshot challenge to avoid change origin data, also encrypt question and options identify
        //

        const expireTime = new Date(currentDate.getTime() + (challenge.time * 60 * 1000));
        let snapshotChallenge = Object.assign({
            email: email,
            expireTime: expireTime
        }, challenge)

        snapshotChallenge.questions = snapshotChallenge.questions &&
            snapshotChallenge.questions
            .map(q => Object.assign({
                id: q.id,
                kind: q.kind,
                question: q.question,
                options: q.options && q.options.map(o => {

                    hmac.update('' + new Date().getTime());

                    return {
                        id: hmac.copy().digest('hex'),
                        value: o.value,
                        correct: o.correct
                    }
                })
            }))

        await this.collection
            .insertOne(snapshotChallenge);

        // clean answers for user
        const cleanVersion = cleanAnswers(snapshotChallenge);
        return [cleanVersion, null]
    }

    // return [passed, error]
    // 
    async submit(challenge, email) {

        // 1. get challenge, if not, return error
        // 2. calculate score
        // 3. return pass/failed

        const currentDate = new Date();

        const challengeSession = await this.collection.findOne({
            challengeId: challenge.challengeId,
            level: challenge.level,
            email: email,
            expireTime: {
                $gt: currentDate
            },
        })

        if (!challengeSession) {
            return [null, 'Challenge is not found']
        }

        // TODO: calculate score. For the time being, just alway passed :v

        return [true, null]

    }
}

function cleanAnswers(challenge) {
    if (!challenge) {
        return
    }

    let cleanVersion = Object.assign({}, challenge);

    cleanVersion.questions = challenge.questions && challenge
        .questions
        .map(q => Object.assign({
            id: q.id,
            kind: q.kind,
            question: q.question,
            options: q.options && q.options.map(o => {
                return {
                    id: o.id,
                    value: o.value
                }
            })
        }))

    return cleanVersion
}
const projectionIgnoreIdField = {
    projection: {
        '_id': 0
    }
}
