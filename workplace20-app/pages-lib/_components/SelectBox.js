import { Transition } from '@headlessui/react';
import { useState } from 'react';

const SelectBox = ({
  options,
  value,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(prevState => setIsOpen(!prevState));
  }

  const hanldOptionClick = (option) => () => {
    onChange(option.value);
    setIsOpen(false);
  }

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="w-full">
      <div className="mt-1 relative">
        <button onClick={handleToggleMenu} type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" className="relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
          <span className="block truncate">
            {selectedOption?.label}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {/* Heroicon name: solid/selector */}
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        { isOpen &&
          <Transition
            show={true}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {(ref) => (
              <div ref={ref} className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
                <ul tabIndex={-1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {
                    options.map(option => {
                      const { label: optionLabel, value: optionValue } = option;
                      const isSelected = optionValue == value;

                      return (
                        <li onClick={hanldOptionClick(option)} key={value} role="option" className="group hover:text-white hover:bg-orange-500 text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4">
                          <span className={`${isSelected ? 'font-semibold' : 'font-normal'} block truncate`}>
                            {optionLabel}
                          </span>
                          {
                            isSelected && (<span className="group-hover:text-white text-orange-500 absolute inset-y-0 left-0 flex items-center pl-1.5">
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>)
                          }

                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )}
          </Transition>
        }
      </div>
    </div>

  )
}

export default SelectBox;