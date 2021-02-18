import authCheck from 'lib/auth-checker';

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
  const { answers } = req.body;

  res.status(200).send({
    id: 'q1',
    kind: 'options',
    question: '1 Fusce dignissim pretium nisl, in consequat tellus accumsan eget?',
    answers: answers,
    options: [
      {
        id: 'o1',
        value: 'id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit'
      },
      {
        id: 'o2',
        value: 'massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in'
      },
      {
        id: 'o3',
        value: 'sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non'
      },
      {
        id: 'o4',
        value: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat'
      }
    ]
  })
}