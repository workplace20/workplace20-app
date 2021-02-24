import classnames from 'classnames';

const CardContent = ({children, className}, ...props) => (
  <div className={classnames(className, "px-4 py-3 bg-gray-50 sm:px-6")} {...props}>
    { children }
  </div>
)

export default CardContent;