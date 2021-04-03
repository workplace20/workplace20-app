import React from 'react';
import classnames from 'classnames';
import { SelectBox } from 'pages-lib/_components/controls';
import { Transition } from '@headlessui/react';

const Tabs = ({
  value,
  onChange,
  children
}) => {
  const tabHeaders = React.Children.map(children, child => React.cloneElement(child, { onClick: onChange, value }));
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
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
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
  value
}) => {
  const handleClick = () => onClick(code);

  return (
    <button onClick={handleClick} className={classnames(
      "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none",
      {
        "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": value !== code,
        "border-orange-500 text-gray-900": value === code
      }
    )}>
      {children}
    </button>
  )
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
