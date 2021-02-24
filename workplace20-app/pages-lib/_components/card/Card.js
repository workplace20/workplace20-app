import classnames from 'classnames';

const Card = ({children, className, ...props}) => (
  <div className={classnames(className, "rounded-lg bg-white overflow-hidden shadow")} {...props}>
    { children }
  </div>
)

export default Card;