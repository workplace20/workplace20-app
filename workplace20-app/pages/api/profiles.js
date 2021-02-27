import dbhelper from 'lib/database';
import authCheck from 'lib/auth-checker'
import {
    getSession
} from 'next-auth/client';
import {
    Profile
} from 'controllers/profile'

import {
    ValidationError,
    Create
} from 'lib/error'

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            await authCheck(req, res, handleGet)
            break
        case 'PUT':
            await authCheck(req, res, handlePut)
            break

        default:
            res.status(405).send("Method not support")
            break
    }
}

async function handleGet(req, res) {
    const session = await getSession({
        req
    });
    const profileCollection = await dbhelper.collectionFor('profiles');
    const loggedProfile = await profileCollection.findOne({
        email: session.user.email
    }, projectionIgnoreIdField)


    if (loggedProfile) {
        res.status(200).send({
            ...loggedProfile
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}

async function handlePut(req, res) {
    const session = await getSession({
        req
    })

    const profileCollection = await dbhelper.collectionFor('profiles')

    const profileCtr = new Profile(profileCollection, session.user.email)

    const [profile, error] = await profileCtr.update(req.body)

	let validatorError = Create(res)
    if (error) {
		validatorError.endWith(400,error)
        return
    }

    res.status(200).send(profile);
}

// No need return _id of document to client in this api
const projectionIgnoreIdField = {
    projection: {
        '_id': 0
    }
}

/* BELOW IS PROFILE MODEL */
const profileModel = {
    kind: ['business', 'creator'],
    status: ['new', 'review', 'active', 'deactive'],
    name: '',
    email: '',
    yearOfExperience: 10,
    jobAvailable: [true, false],
    domain: ['.net', 'java'],
    skills: {
        status: 'new', // new, review, verified
        matrix: {}
    },
    requirement: {
        status: 'new', // new, review, verified
        culture: 'freetext',
        rate: '40$',
        rateType: ['hours', 'contracts', 'full-time', 'long-term-contract'],
        hourPerWeek: 30
    }
}


/*

1. check kind = business/creator

2. check status is 'new', go to onboard screen, check all general required matched => status is 'active'

3. Sent offer, status = 'active', skills.status='verified', requirement.status='verified'

*/
