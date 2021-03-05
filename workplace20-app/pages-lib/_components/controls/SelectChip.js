import classnames from 'classnames';
import Chip from './Chip';

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
            <Chip
              color={`${selected ? 'gray' : 'white'}`}
              onClick={handleSelect(x.value)}
              value={x.label}
              className="cursor-pointer"
            />
          )
        })
      }
    </div>
  )
}

export default SelectChip;