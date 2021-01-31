const questions = {
    general: [
        {
            code: "jobAvailable",
            type: 'required',
            question: {
                kind: 'options',
                options: [
                    "This is options 1",
                    "This is options 2",
                    "This is options 3"
                ]
            },
        },
        {
            code: "jobAvailable",
            type: 'required',
            question: {
                kind: 'options',
                options: [
                    "This is options 1",
                    "This is options 2",
                    "This is options 3"
                ]
            },
        }
    ],
    technogies: [],
    skillMatrix: [
        {
            code: 'technologyArea',
            type: 'require',
            question: {
                kind: 'multiple',
                options: [
                    ".NET",
                    "Node.js",
                    "Database",
                    "Golang",
                    "Java"
                ]
            }
        }
    ],
    requirement: []
}

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            await authCheck(req, res, handleGet)
            break
        case 'POST':
            await authCheck(req, res, handlePost)
            break

        default:
            res.status(405).send("Method not support")
            break
    }
}

async function handleGet(_, res) {
    res.status(200).send(questions)
}

async function handlePost(req, res) {
    const body = req.body

    /* 
    Expected:
        {
            "skillMatrix":[
                {
                    code:"",
                    answer:""
                }
            ],
            "requirement":[
                {
                    code:"",
                    answer:[""]
                }
            ]
        }
    */



    res.status(200).send('POST')
}