import classnames from 'classnames';

const typeClasses = {
  primary: "border-transparent shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:ring-orange-500",
  secondary: "border-orange-300 text-orange-700 bg-orange-50 hover:bg-orange-100 focus:ring-orange-500",
  white: "border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:ring-orange-500",
};

const sizeClasses = {
  xs: "px-2.5 py-1.5 text-xs font-medium",
  sm: "px-3 py-2 text-sm leading-4 font-medium",
  base: "px-4 py-2 text-sm font-medium",
  lg: "px-4 py-2 text-base font-medium",
  xl: "px-6 py-3 text-base font-medium"
}

const iconClasses = {
  xs: "-ml-0.5 mr-2 h-4 w-4",
  sm: "-ml-1 mr-2 h-5 w-5",
  base: "-ml-1 mr-2 h-5 w-5",
  lg: "-ml-1 mr-3 h-5 w-5",
  xl: "-ml-1 mr-3 h-5 w-5"
}

const Button = ({
  color = 'primary',
  size = 'base',
  onClick,
  children,
  disabled,
  loading = false,
  className,
  ...props
}) => {
  var btnClass = classnames(
    'inline-flex items-center border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    className,
    typeClasses[color],
    sizeClasses[size],
  );

  return (
    <button
      {...props}
      onClick={onClick}
      className={btnClass}
      disabled={disabled || loading}>
      {
        loading && (
          <svg className={classnames('animate-spin text-white', iconClasses[size])} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )
      }
      {children}
    </button>
  )
}

export default Button;