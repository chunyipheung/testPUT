// react
import { useState } from "react";
import { Link } from 'react-router-dom';

// icons
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// components
import DesktopLoginPartWithDropdown from "./DesktopLoginPartWithDropdown";
import DesktopLoginPart from "./DesktopLoginPart";
import MobileLoginPart from "./MobileLoginPart";
import FixedBottomNavBar from "../../loggedinpages-components/loggedin-public/navbar/FixedBottomNavBar"
import MobileProductsNavItems from "./MobileProductsNavItems";
import DesktopProductsNavItems from "./DesktopProductsNavItems";

// data
import { productNavItems, otherNavItems } from "./header-data";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ whichPageNow, isAccountPage=false}) {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const clientName = sessionStorage.getItem("token_custname");
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  return (
    <>
  <div className={`lg:shadow-sm ${isAccountPage && "hidden sm:block"}`}>
    <header className="relative z-10 container mx-auto">

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
              src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=700"
              alt="educare logo"
            />
          </Link>
        </div>
        <div className="flex items-center justify-end lg:hidden">
          {/* login icon/button */}
          { isLoggedIn && 
          <DesktopLoginPartWithDropdown whichPageNow={whichPageNow} />}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          { productNavItems.map((productNavItem, index) => (
            <DesktopProductsNavItems
              key={index} 
              navName={productNavItem.navName} 
              productData={productNavItem.productData}/>
          )) }

          { otherNavItems.map((link, index) => (
            <Link
            key={index}
            to={link.href}
            className="text-xl font-semibold leading-6 text-gray-900"
          >
            {link.name}
          </Link>
          )) }

        </PopoverGroup>

        {/* login icon/button */}
        { !isLoggedIn ? 
          <DesktopLoginPart/> : 
          <div className="hidden lg:block lg:flex-1">
            <DesktopLoginPartWithDropdown whichPageNow={whichPageNow} />
          </div>
        }
        
      </nav>

      {/* mobile header */}

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-100" />
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

                { productNavItems.map((productNavItem, index) => (
                  <MobileProductsNavItems
                    key={index} 
                    navName={productNavItem.navName} 
                    productData={productNavItem.productData}
                    open={mobileMenuOpen}
                    classNames={classNames} />
                )) }

                { otherNavItems.map((link, index) => (
                  <Link
                  key={index}
                  to={link.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
                )) }

              </div>

              {/* mobile login part */}
              { !isLoggedIn && <MobileLoginPart />  }
               
            </div>
          </div>
        </DialogPanel>

      </Dialog>
    </header>
    </div>
    
    {isLoggedIn && <FixedBottomNavBar whichPageNow={whichPageNow}/>}
    
    </>
  );
}
