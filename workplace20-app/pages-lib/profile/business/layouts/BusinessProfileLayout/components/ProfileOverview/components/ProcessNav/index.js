import Link from 'next/link';

const ProcessNav = ({
  generalChallengeCompleted,
  firstJobAdded,
  reviewed,
}) => {
  const steps = [
    {
      stepNumber: '01',
      description: 'Welcome to Workplace 20',
      completed: true,
      isCurrent: false,
      href: '#'
    },
    {
      stepNumber: '02',
      description: 'Tell us about your business',
      completed: generalChallengeCompleted,
      isCurrent: !generalChallengeCompleted,
      href: '/challenges/general'
    },
    {
      stepNumber: '03',
      description: 'Add your 1st job',
      completed: firstJobAdded,
      isCurrent: generalChallengeCompleted && !firstJobAdded,
      href: '#'
    },
    {
      stepNumber: '04',
      description: 'Review',
      completed: reviewed,
      isCurrent: !reviewed && generalChallengeCompleted && firstJobAdded,
      href: '#'
    }
  ];

  return (
    <nav aria-label="Progress">
      <ol className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-4 sm:divide-y-0">
        {
          steps.map((step, index) => {
            const { stepNumber, description, completed, isCurrent, href } = step;
            return (
              <li className="relative md:flex-1 md:flex" key={`onboard-step-${stepNumber}`}>
                {
                  completed ? (
                    <CompletedStep
                      description={description}
                      href={href}
                    />
                  ) : isCurrent ? (
                    <CurrentStep
                      stepNumber={stepNumber}
                      description={description}
                      href={href}
                    />

                  ) : (
                        <UpcomingStep
                          stepNumber={stepNumber}
                          description={description}
                          href={href}
                        />
                      )
                }
                {
                  index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                      <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                        <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )
                }
              </li>
            )
          })
        }
      </ol>
    </nav>
  )
}

const CompletedStep = ({
  description,
  href
}) => (
    <Link href={href}>
      <a className="group flex items-center w-full">
        <span className="px-6 py-4 flex items-center text-sm font-medium">
          <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full group-hover:bg-orange-600">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="ml-4 text-sm font-medium text-gray-900">{description}</span>
        </span>
      </a>
    </Link>
  )

const CurrentStep = ({
  stepNumber,
  description,
  href
}) => (
    <Link href={href}>
      <a className="px-6 py-4 flex items-center text-sm font-medium">
        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-orange-500 rounded-full" aria-current="step">
          <span className="text-orange-500">{stepNumber}</span>
        </span>
        <span className="ml-4 text-sm font-medium text-orange-600">{description}</span>
      </a>
    </Link>
  )

const UpcomingStep = ({
  stepNumber,
  description,
  href
}) => (
    <Link href={href}>
      <a className="group flex items-center">
        <span className="px-6 py-4 flex items-center text-sm font-medium">
          <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span className="text-gray-500 group-hover:text-gray-900">{stepNumber}</span>
          </span>
          <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{description}</span>
        </span>
      </a>
    </Link>
  )

export default ProcessNav;