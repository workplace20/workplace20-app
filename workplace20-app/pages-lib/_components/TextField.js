const TextField = ({ label, value = 'N/A' }) => (
  <>
    <dt className="text-sm font-medium text-gray-500">
      {label}
    </dt>
    <dd className="mt-1 text-sm text-gray-900">
      {value}
    </dd>
  </>
)

export default TextField;