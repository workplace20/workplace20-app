export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await handleGet(req, res)
      break
    case 'POST':
      await handlePost(req, res)
      break
    default:
      res.status(405).send("Method not support")
      break
  }
}

async function handleGet(req, res) {
  const cursor = parseInt(req.query.cursor) || 0;

  const pageSize = 5;

  const data = Array(pageSize)
    .fill(0)
    .map((_, i) => {
      return {
        id: i + cursor,
        title: 'Full-stack developer ' + (i + cursor) + ` (type: ${req.query.type})` + ` (server time: ${Date.now()})`,
        level: 'Expert',
        english: 'Advance',
        introduction: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
        requiredSkills: ['react', 'csharp']
      }
    })

  const nextCursor = cursor < 10 ? data[data.length - 1].id + 1 : null;

  res.status(200).send({ data, nextCursor });

  // no data
  // res.status(200).send({ data: [], nextCursor: null });

  // error
  // res.status(500).send('internal server error');
}


async function handlePost(req, res) {
  const {
    title,
    skills,
    level,
    english,
    introduction,
    description,
  } = req.body;

  res.status(200).send({ 
    id: 'added-job',
    title,
    skills,
    level,
    english,
    introduction,
    description,
  });
}
