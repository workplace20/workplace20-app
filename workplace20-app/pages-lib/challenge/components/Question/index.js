const answerOptionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const Question = ({
  currentQuestion,
  onAnswer
}) => {
  if (!currentQuestion) return null;

  const { question, options, answers = [], id: questionId, kind } = currentQuestion;

  const handleAnswer = (answerId) => () => {
    var result = getQuestionAnswer(answers, kind, answerId);

    if (answers.length !== result.length || answers.some(answer => !result.includes(answer))) {
      onAnswer(result);
    }
  }

  return (
    <div className="mx-auto xl:grid xl:grid-cols-2">
      <div className="xl:col-span-1 xl:pr-8 xl:border-r xl:border-gray-200 py-4">
        <div>
          <h2 className="text-2xl font-medium text-gray-900">
            {question}
          </h2>
          <QuestionInstruction questionKind={kind}/>
        </div>
      </div>
      <div className="xl:pl-8 py-4">
        <div className="border overflow-hidden sm:rounded-md border-gray-200">
          <ul className="divide-y divide-gray-200">
            {
              options.map((option, index) => {
                const { id, value } = option || {};
                return (
                  <li key={`question-${questionId}-option-${id}`}>
                    <button onClick={handleAnswer(id)} className={`${answers && answers.includes(id) ? 'bg-orange-100': 'hover:bg-orange-50'} block focus:outline-none`}>
                      <div className="px-4 py-8 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-xl font-medium text-gray-600 text-left">
                           { value }
                          </p>
                          <div className="ml-4 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-lg leading-5 font-semibold rounded-full bg-orange-300 text-white">
                              {answerOptionLetters[index]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

const getQuestionAnswer = (answers, kind, answerId) => {
  const answerKindGetters = {
    options: getSignleOptionAnswer(answers),
    multiOptions: getMultipleOptionAnswer(answers)
  }

  return answerKindGetters[kind](answerId);
}

const getSignleOptionAnswer = (answers) => (answerId) => {
  if (!answers.includes(answerId)) {
    return [answerId];
  }

  return answers;
}

const getMultipleOptionAnswer = (answers) => (answerId) => {
  if (!answers.includes(answerId)) {
    return [...answers, answerId];
  } 

  return answers.filter(answer => answer !== answerId);
}

const QuestionInstruction = ({questionKind}) => {
  const instructions = {
    options: "You can select only one option.",
    multiOptions: "You can select multiple options."
  } ;
  
  return (
    <p className="text-xl font-base text-gray-700 mt-2">{instructions[questionKind] || ''}</p>
  )
}

export default Question;