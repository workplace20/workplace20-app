import React from 'react';
import classnames from 'classnames';
import { SelectBox } from 'pages-lib/_components/controls';
import { Transition } from '@headlessui/react';

const tabNavStyles = {
  underline: '-mb-px flex space-x-8',
  bar: 'relative z-0 rounded-lg shadow flex divide-x divide-gray-200'
}

const Tabs = ({
  value,
  type = 'underline',
  onChange,
  children
}) => {
  const tabHeaders = React.Children.map(children, child => React.cloneElement(child, { onClick: onChange, value, type }));
  const tabOptions = React.Children.map(children, child => ({
    label: child.props.children,
    value: child.props.code
  }));

  return (
    <>
      <div className="sm:hidden">
        <SelectBox
          options={tabOptions}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="hidden sm:block">
        <nav className={tabNavStyles[type]} aria-label="Tabs">
          {tabHeaders}
        </nav>
      </div>
    </>
  )
}

const Tab = ({
  code,
  children,
  onClick,
  value,
  type
}) => {
  const handleClick = () => onClick(code);

  const tabTypes = {
    underline: (
      <button onClick={handleClick} className={classnames(
        "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none",
        {
          "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": value !== code,
          "border-orange-500 text-gray-900": value === code
        }
      )}>
        {children}
      </button>
    ),
    bar: (
      <button
        onClick={handleClick}
        className={classnames(
          'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 focus:outline-none',
          {
            'text-gray-900': value === code,
            'text-gray-500 hover:text-gray-700': value !== code,
          }
        )}>
        {children}
        <span aria-hidden="true" className={classnames(
          'absolute inset-x-0 bottom-0 h-0.5',
          {
            'bg-orange-500': value === code,
            'bg-transparent': value !== code,
          }
        )} />
      </button>
    )
  }
  return tabTypes[type];
}

const TabPanel = ({
  code,
  value,
  children
}) => (
    <Transition
      show={value === code}
      enter="duration-150 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {children}
    </Transition>
  )

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;
