const WorkingInfo = ({
  rate,
  status
}) => (
  <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
    <div className="px-6 py-5 text-base font-medium text-center">
      <span className="text-gray-600">{`${rate}$/h`}</span>
    </div>
    <div className="px-6 py-5 text-base font-medium text-center">
      <span className="text-gray-600">{status}</span>
    </div>
  </div>
)

export default WorkingInfo;