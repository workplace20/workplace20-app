import dbhelper from 'lib/database';
import authCheck from 'lib/auth-checker'
import jwt from 'next-auth/jwt'

const secret = process.env.SECRET

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

    const token = await jwt.getToken({ req, secret })

    const profileCollection = await dbhelper.collectionFor('profiles');
    const loggedProfile = await profileCollection.findOne({ email: token.email }, projectionIgnoreIdField)

    if (loggedProfile) {
        res.status(200).send(loggedProfile)
    } else {
        res.status(401).send()
    }
}

async function handlePut(req, res) {

    const token = await jwt.getToken({ req, secret })

    const profileCollection = await dbhelper.collectionFor('profiles')

    const updater = {};
    const errors = [];

    if (req.body.kind && ['business', 'creator'].indexOf(req.body.kind) >= 0) {
        updater.$set = { kind: req.body.kind }
    } else {
        errors.push({ kind: "required in range [business,creator]" })
    }

    if (errors.length > 0) {
        res.status(400).send({ errors: errors })
        return
    }

    await profileCollection.updateOne(
        { email: token.email },
        updater,
        { upsert: false })

    const profile = await profileCollection.findOne({ email: token.email }, projectionIgnoreIdField)

    res.status(200).send(profile)
}
// No need return _id of document to client in this api
const projectionIgnoreIdField = { projection: { '_id': 0 } }

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