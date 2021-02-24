import classnames from 'classnames';

const H3 = ({ children, className }) => (
  <h3 className={classnames("text-lg leading-6 font-medium text-gray-900", className)}>
    {children}
  </h3>
)

export default H3;