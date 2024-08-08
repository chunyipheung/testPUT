// react
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

// headless ui
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

// icons / images
import { 
  ArrowRightStartOnRectangleIcon,
 } from "@heroicons/react/24/outline";
import AvatarImage from "../../../assets/images/avatars/sample-avatar.png";

// components
import LoggedInHeaderLink from "../../loggedinpages-components/loggedin-public/navbar/loggedin-header-data";

export default function DesktopLoginPartWithDropdown({ whichPageNow }) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogOut = () => {
    sessionStorage.clear();
    if(whickPageNow === "homepage")
      window.location.reload();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className='h-10 flex justify-end items-center'>

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton 
          className="flex w-full justify-center items-center gap-x-1.5 rounded-md
            px-3 py-2 text-xl font-semibold text-gray-900" onClick={toggleDropdown} ref={dropdownRef}>
          <img 
            alt="avatar"
            src={AvatarImage}
            className={`h-10 hover:ring-4 hover:ring-offset-2 hover:ring-violet-300 rounded-full
              ${isOpen && "ring-4 ring-offset-2 ring-violet-300"}`}
          />
        </MenuButton>
      </div>

      <MenuItems
        modal={false}
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right
        divide-y divide-gray-200 rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 
        transition focus:outline-none overflow-hidden
        data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 
        data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        
        <div className="px-4 py-5 flex flex-col items-center space-y-2">
          <img src={AvatarImage} alt="account icon" className="h-16 w-16" />
          <p className="truncate text-base font-medium text-gray-900">{sessionStorage.getItem('token_custname')}，您好！</p>
        </div>

        <div className='py-3'>
          {LoggedInHeaderLink.map((link, index) => (
            <MenuItem key={index}>
              <Link
                to={link.to}
                className={`group flex items-center px-4 py-2 text-base hover:text-violet-700 hover:font-semibold
                data-[focus]:text-violet-700
                ${whichPageNow === link.id && "text-violet-700 font-semibold"}`
              }
              >
                <link.icon
                  aria-hidden="true"
                  className="mr-3 h-5 w-5 group-hover:text-violet-700"
                />
                {link.name}
              </Link>
            </MenuItem>
        ))}
        </div>

          <div className='py-3'>
            <MenuItem>
              <Link
                to="/"
                className="group flex items-center px-4 py-2 text-base hover:text-violet-700 hover:font-semibold
                data-[focus]:text-violet-700"
                onClick={handleLogOut}
              >
                <ArrowRightStartOnRectangleIcon
                  aria-hidden="true"
                  className="mr-3 h-5 w-5 group-hover:text-violet-700"
                />
                登出
              </Link>
            </MenuItem>
          </div>

      </MenuItems>
    </Menu>
    </div>
  )
}
