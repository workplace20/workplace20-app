export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await handleGet(req, res)
      break
    case 'PUT':
      await handlePut(req, res)
      break
    default:
      res.status(405).send("Method not support")
      break
  }
}

async function handleGet(req, res) {
  const {
    query: { id },
  } = req

  res.status(200).send({
    id,
    title: 'Full-stack developer ',
    level: 'Expert',
    english: 'Advance',
    introduction: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
    description: '#### Job Responsibilities\n * Tempor ultrices proin nunc fames nunc ut auctor vitae sed.\n * Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.\n * Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed.\n #### Job Requirements\n * Tempor ultrices proin nunc fames nunc ut auctor vitae sed.\n * Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.\n * Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed.\n #### Additional Requirements\n * Tempor ultrices proin nunc fames nunc ut auctor vitae sed.\n * Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.\n * Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed.\n',
    requiredSkills: ['react', 'csharp']
  })
}

async function handlePut(req, res) {
  const {
    query: { id },
  } = req

  const {
    title,
    skills,
    level,
    english,
    introduction,
    description,
  } = req.body;

  res.status(200).send({ 
    id,
    title,
    skills,
    level,
    english,
    introduction,
    description,
  });
}