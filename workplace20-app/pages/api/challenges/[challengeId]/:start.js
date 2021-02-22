import authCheck from 'lib/auth-checker';
import dbhelper from 'lib/database';
import debug from 'debug'
import {
    getSession
} from 'next-auth/client';
import {
    Profile
} from 'controllers/profile'

import {
    Challenge
} from 'controllers/challenge'

const log = debug('challanges/:start')

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            await authCheck(req, res, handlePost)
            break
        default:
            res.status(405).send("Method not support")
            break
    }
}

async function handlePost(req, res) {
    var currentDate = new Date();
    var expireTime = new Date(currentDate.getTime() + (30 * 60 * 1000));

    // if challenge has started, then return the current challenge, 
    // if challenge has not started
    // then do:
    // generate questionsId, answers Id as clone this challenge
    // store snapshot of challenge as clone from origin to database
    // return the snapshot challenge version
    //
    const challengeId = req.query.challengeId;
    const session = await getSession({
        req
    })

    if (!challengeId) {
        res.status(400).send('Invalid challenge code')
        return
    }

    const profileCollection = await dbhelper.collectionFor('profiles')
    const profileDomain = new Profile(profileCollection, session.user.email)

    const [

        challengeOrigin,
        error
    ] = await profileDomain.getNextLevelOf(challengeId)

    if (error) {
        res.status(400).send(error)
        return
    }

    const challengeCollection = await dbhelper.collectionFor('challenges')
    const challengeDomain = new Challenge(challengeCollection)

    const [challenged, startError]= await challengeDomain.start(session.user.email, challengeOrigin)
    
    if(startError){ 

        res.status(400).send(startError)
        return
    }
    // clean answers for user
    res.status(200).send(challenged)
}
