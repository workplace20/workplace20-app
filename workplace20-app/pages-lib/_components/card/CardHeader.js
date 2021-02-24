import classnames from 'classnames';

const CardHeader = ({children, className, ...props}) => (
  <div className={classnames(className, "px-4 py-4 sm:px-6 border-b border-gray-200 flex items-center justify-between flex-wrap sm:flex-nowrap")} {...props}>
    { children }
  </div>
)

export default CardHeader;