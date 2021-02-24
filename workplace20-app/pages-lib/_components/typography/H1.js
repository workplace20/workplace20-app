import classnames from 'classnames';

const H1 = ({ children, className }) => (
  <h1 className={classnames("text-2xl font-bold text-gray-900", className)}>
    {children}
  </h1>
)

export default H1;