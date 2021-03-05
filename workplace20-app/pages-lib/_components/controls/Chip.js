import classnames from 'classnames';

const colorClasses = {
  primary: "bg-orange-400 text-white border-none",
  secondary: "bg-orange-50 text-orange-700 border-none",
  white: "border-gray-300 text-gray-800 bg-white",
  gray: "bg-gray-100 text-gray-800 border-gray-300"
};

const Chip = ({
  color = 'primary',
  value,
  className,
  ...props
}) => {

  return (
    <span
      {...props}
      className={classnames(
        className,
        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium border',
        colorClasses[color]
      )}
    >
      {value}
    </span>
  )
}

export default Chip;