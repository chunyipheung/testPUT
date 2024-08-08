// react
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

// icons
import { 
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
 } from "@heroicons/react/24/outline";

// components
import FixedBottomNavBar from "./FixedBottomNavBar";
import MobileAccountPart from "./MobileAccountPart";

// links data
import LoggedInHeaderLink from "./loggedin-header-data";

export default function LoggedInHeader({ whichPageNow }) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <header className="relative z-10 container mx-auto 
    bg-purple-500 shadow-lg shadow-violet-500/50
    my-10 py-2 px-4 container mx-auto rounded-full hidden sm:block
    ">

      {/* desktop header */}
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">教安心</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=50"
              alt="educare logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      
        <div className="hidden lg:flex lg:gap-x-3">
          { LoggedInHeaderLink.map((link, index) => (
              <Link
              key={index}
              to={link.to}
              className={`flex text-xl font-semibold leading-6 text-gray-900 text-white
              rounded-xl px-5 py-3
              hover:bg-violet-700 focus:bg-violet-700
              ${whichPageNow === link.id ? "bg-violet-700" : ""}
              `}
            > 
              {link.name}
              <link.activeIcon className="h-6 w-6 ml-2 text-amber-100"/>
            </Link>
            )
          ) }

          </div>

        {/* logout icon/button */}
        <div className="h-10 hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/"
            className="flex items-center text-xl font-semibold leading-6 text-gray-900 text-white"
          >
              登出
              <ArrowRightStartOnRectangleIcon className="h-6 w-6 ml-2 text-white"/>

          </Link>
        </div>

      </nav>

      {/* mobile header */}

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">教安心</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=700"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {LoggedInHeaderLink.map((link, index) => (
                  <Link
                  key={index}
                  to={link.to}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center"
                  >
                    <link.icon className='h-5 w-5 mr-3'/>
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* login icon/button */}
              <MobileAccountPart isLoggedIn={true}/>

            </div>
          </div>
        </DialogPanel>
      </Dialog>

    </header>
    
    {/* mobile header */}
    <FixedBottomNavBar whichPageNow={whichPageNow} />
    </>
  );
}
