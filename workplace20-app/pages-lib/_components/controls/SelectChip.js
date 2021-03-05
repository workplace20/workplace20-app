import classnames from 'classnames';

const SelectChip = ({
  value,
  options,
  onChange,
  multipleSelect = false,
  className
}) => {
  const handleSelect = (selectedValue) => () => {
    if (!multipleSelect) {
      onChange(selectedValue);
    } else {
      if (!value.includes(selectedValue)) {
        onChange([...value, selectedValue]);
      } else {
        onChange(value.filter(x => x !== selectedValue))
      }
    }
  }

  return (
    <div className={classnames(className, 'space-x-1')}>
      {
        options.map(x => {
          const selected = !multipleSelect ? x.value === value : value.includes(x.value);

          return (
            <span onClick={handleSelect(x.value)} class={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium border ${selected ? 'bg-gray-100 text-gray-800 border-gray-300' : 'border-gray-300'} cursor-pointer`}>
              {x.label}
            </span>
          )
        })
      }
    </div>
  )
}

export default SelectChip;