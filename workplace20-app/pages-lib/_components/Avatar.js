import classnames from 'classnames';

const sizeStyles = {
  xs: 'h-8 w-8',
  sm: 'h-12 w-12',
  base: 'h-16 w-16',
  lg: 'h-20 w-20',
  xl: 'h-24 w-24'
}
const Avatar = ({
  image,
  size = 'base'
}) => {
  if (image) {
    return (<img className={classnames('mx-auto rounded-full', sizeStyles[size])} src={image} alt="avatar" />)
  } else {
    return (
      <span className={classnames('inline-block rounded-full overflow-hidden bg-gray-100', `h-${size} w-${size}`)}>
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
    )
  }
}

export default Avatar;