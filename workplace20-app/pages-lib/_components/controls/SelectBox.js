import classnames from 'classnames';
import { Listbox, Transition } from "@headlessui/react";

const SelectBox = ({
  className =' focus:outline-none focus:ring-orange-500 focus:border-orange-500',
  value,
  options,
  onChange
}) => {
  const selectedOption = options.find(option => option?.value === value);

  return (
    <Listbox
      as="div"
      className="space-y-1"
      value={value}
      onChange={onChange}
    >
      {({ open }) => (
        <>
          <div className="relative">
            <span className="inline-block w-full rounded-md shadow-sm">
              <Listbox.Button
                className={classnames(
                  className,
                  'h-full pl-3 pr-10 py-2 text-left border border-gray-300 bg-white cursor-default relative w-full block w-full shadow-sm sm:text-sm rounded-md transition ease-in-out duration-150 sm:text-sm',
                )}
              >
                <span className={classnames(
                  "block truncate",
                  {
                    'h-5': !selectedOption?.label
                  }
                )}>{selectedOption?.label}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Listbox.Button>
            </span>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-50"
            >
              <Listbox.Options
                static
                className="max-h-52 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm sm:leading-5"
              >
                {options.map((option) => (
                  <Listbox.Option key={option.value} value={option.value}>
                    {({ selected, active }) => (
                      <div
                        className={`${
                          active
                            ? "text-white bg-orange-500"
                            : "text-gray-900"
                          } cursor-default select-none relative py-2 pl-8 pr-4`}
                      >
                        <span
                          className={`${
                            selected ? "font-semibold" : "font-normal"
                            } block truncate`}
                        >
                          {option.label}
                        </span>
                        {selected && (
                          <span
                            className={`${
                              active ? "text-white" : "text-orange-500"
                              } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                          >
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default SelectBox;