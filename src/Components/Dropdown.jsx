import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const DropdownMenu = ({ options, onSelect, name }) => {
  return (
    <Menu as="div" className="relative inline-block text-left rounded-lg h-2">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-900 shadow-sm outline-none focus:outline-none">
          {name}
          <ChevronDownIcon className="-mr-1 h-4 w-4 text-gray-600" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <label
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } block px-4 py-2 text-sm w-full text-left cursor-pointer flex items-center`}
                  >
                    <input
                      type="radio"
                      className="form-radio h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
                      checked={option.selected} // Assume each option has a `selected` property indicating whether it is selected or not
                      onChange={() => onSelect(option.value)}
                    />
                    <span className="ml-2 px-2 py-1">{option.label}</span>
                  </label>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
