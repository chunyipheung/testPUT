import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function ActiveFilter({ currentFilter, setFilter, menuData, needLeft0=true }) {
  const handleMenuItemClick = (state) => {
    setFilter(state);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-base text-gray-700 ">
          {currentFilter}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        modal={false}
        className={`${needLeft0 ? "left-0" : "right-0"}
        absolute z-10 mt-2 w-56 origin-top-right rounded-md 
        bg-white shadow-lg ring-1 ring-black ring-opacity-5 
        focus:outline-none data-[closed]:scale-95 data-[closed]:transform 
        data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 
        data-[enter]:ease-out data-[leave]:ease-in`}
      >
        <div className="py-1">
          {menuData.map((menuName, index) => (
            <MenuItem key={index} as="div">
              <div
                onClick={() => handleMenuItemClick(menuName)}
                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
              >
                {menuName}
              </div>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
