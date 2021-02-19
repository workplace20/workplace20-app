const Navigation = ({
  navigations
}) => (
    <ol className="flex items-center space-x-5">
      {
        navigations.map(navigator => (
          <li key={navigator.key}>
            {
              navigator.isCurrent ? (
                <CurrentQuestionIndicator />
              ) : navigator.isCompleted ? (
                <CompletedQuestionIndicator
                  onClick={navigator.onClick}
                />
              ) : (
                    <UncompletedQuestionIndicator
                      onClick={navigator.onClick}
                      disabled={navigator.disabled}
                    />
                  )
            }
          </li>
        ))
      }
    </ol>
  );

const CurrentQuestionIndicator = () => (
  <button className="relative flex items-center justify-center focus:outline-none" aria-current="step">
    <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
      <span className="w-full h-full rounded-full bg-orange-200" />
    </span>
    <span className="relative block w-2.5 h-2.5 bg-orange-600 rounded-full" aria-hidden="true" />
  </button>
)

const CompletedQuestionIndicator = ({ onClick }) => (
  <button onClick={onClick} className="focus:ring-orange-500 block w-2.5 h-2.5 bg-orange-600 rounded-full hover:bg-orange-700 focus:outline-none">
  </button>
)

const UncompletedQuestionIndicator = ({ onClick, disabled = false }) => (
  <button onClick={onClick} className="disabled:opacity-50 disabled:cursor-not-allowed block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400 focus:outline-none" disabled={disabled}>
  </button>
)

export default Navigation;