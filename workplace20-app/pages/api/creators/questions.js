const questions = {
    general: [
        {
            code: "jobAvailable",
            type: 'require',
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
    skillMatrix: [
        {
            code: 'technologyArea',
            type:'require',
            question:{
                kind: 'required',
                multioptions:[
                    ".NET",
                    "Node.js",
                    "Database",
                    "Golang",
                    "Java"
                ]
            }
        }
    ],
    requirement: [
        {

        }
    ]
}

export default function handler(req, res) {
    res.status(200).send(questions)
}
