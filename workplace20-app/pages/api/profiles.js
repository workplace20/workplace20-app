import dbhelper from '../../database';
import jwt from 'next-auth/jwt'
const secret = process.env.SECRET

export default async function handler(req, res) {
    const db = await dbhelper.getDb();

    const token = await jwt.getToken({ req, secret })
    if (!token) {
        res.status(401).send()
        return
    }

    const profileCollection = await dbhelper.collectionFor('profiles');
    const loggedProfile = await profileCollection.findOne({ email: token.email },
        {
            projection: {
                '_id': 0
            }
        })

    if (loggedProfile) {
        res.status(200).send(loggedProfile)
    } else {
        res.status(401).send()
    }
}

/* BELOW IS PROFILE MODEL */
const profileModel = {
    kind: ['business', 'creator'],
    status: ['pending', 'review', 'active', 'deactive'],
    name: '',
    email: '',
    yearOfExperience: 10,
    jobAvailable: [true, false],
    domain: ['.net', 'java'],
    skillmatrix: [],
    requirement: {
        culture: 'freetext',
        rate: '40$',
        rateType: ['hours', 'contracts', 'full-time', 'long-term-contract'],
        hourPerWeek: 30
    }
}