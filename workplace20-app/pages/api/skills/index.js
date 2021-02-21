import authCheck from 'lib/auth-checker'
import skillList from '_data/skill.json'
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            //await authCheck(req, res, handleGet)
            await handleGet(res,res)

            break
        default:
            res.status(405).send("Method not support")
            break
    }
}

async function handleGet(req,res){
    
    res.status(200).send(skillList)
}
