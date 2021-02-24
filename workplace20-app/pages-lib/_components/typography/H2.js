import classnames from 'classnames';

const H2 = ({ children, className }) => (
  <h2 className={classnames("text-2xl font-bold leading-7 text-gray-900", className)}>
    {children}
  </h2>
)

export default H2;