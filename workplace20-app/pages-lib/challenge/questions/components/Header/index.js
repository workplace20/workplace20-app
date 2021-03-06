import useTimer from 'pages-lib/_hooks/useTimer';

const Header = ({
  title,
  expireTime,
  onNext,
  canNext,
  onPrev,
  onTimesUp,
  canPrev,
}) => {
  const { hours = '00', minutes = '00', seconds = '00', isTimesUp } = useTimer(expireTime);

  if (isTimesUp) {
    onTimesUp();
    
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="-mt-px w-0 flex-1 flex">
        <button onClick={onPrev} className="disabled:opacity-50 disabled:cursor-not-allowed pt-4 border-t-2 border-transparent lg:pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none" disabled={!canPrev}>
          <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="hidden lg:block">Previous</span>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-base text-gray-900">
          {title} 
        </p>
        <p className="text-lg text-gray-900 mt-2">
          {`${hours}:${minutes}:${seconds}`}
      </p>
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <button onClick={onNext} className="disabled:opacity-50 disabled:cursor-not-allowed border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none" disabled={!canNext}>
          <span className="hidden lg:block">Next</span>
          <svg className="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Header;