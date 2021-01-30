import dbhelper from '../../database';
import jwt from 'next-auth/jwt'
const secret = process.env.SECRET

export default async function handler(req, res) {
    const db = await dbhelper.getDb();

    const token = await jwt.getToken({ req, secret })    
    
    res.status(200).send(token);
}