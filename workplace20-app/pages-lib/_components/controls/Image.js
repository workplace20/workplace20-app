import classnames from 'classnames';

const sizeStyles = {
  xs: 'h-8 w-8',
  sm: 'h-12 w-12',
  base: 'h-16 w-16',
  lg: 'h-20 w-20',
  xl: 'h-24 w-24'
}

const Image = ({
  url,
  size="base"
}) => {
  if (!url) return (
    <span className={classnames('inline-flex items-center justify-center rounded-md bg-gray-400', sizeStyles[size])}>
    </span>
  )

  return (
    <img className={classnames('rounded-md', sizeStyles[size])} src={url} alt />
  )
}

export default Image;