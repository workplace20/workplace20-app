import classnames from 'classnames';

const styleClasses = {
  default: "shadow",
  box: "border border-gray-300 hover:shadow-2xl hover:border-gray-200",
};

const Card = ({
  children, 
  className,
  type = 'default',
  ...props
}) => (
  <div className={classnames(className, "rounded-lg bg-white overflow-hidden", styleClasses[type])} {...props}>
    { children }
  </div>
)

export default Card;