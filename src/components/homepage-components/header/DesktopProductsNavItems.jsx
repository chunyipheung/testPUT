// react
import { Link } from 'react-router-dom';

// icons
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DesktopProductsNavItems({navName, productData}) {

    return(
    <Popover className="relative">
        <PopoverButton className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-gray-900">
          {navName}
          <ChevronDownIcon
            className="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          />
        </PopoverButton>

        <Transition
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {productData.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-start gap-x-6 rounded-lg p-4 leading-6"
                >
                  <div className="flex h-11 w-11 mt-1 flex-none items-center justify-center rounded-lg bg-purple-50">
                    <item.icon
                      className="h-6 w-6 text-violet-700"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-auto">
                    <div className="block pl-1 font-semibold text-gray-900 text-lg">
                      {item.name}
                    </div>
                    <ul>
                      {item.items.map((singleitem, index) => (
                        <li key={index}>
                          <Link to={singleitem.href}
                          className="border-l-4 border-transparent pl-2 -ml-2 block
                        text-lg font-light hover:font-normal
                        hover:border-violet-700 hover:text-violet-700"
                          >{singleitem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </Transition>
    </Popover>
    );

}