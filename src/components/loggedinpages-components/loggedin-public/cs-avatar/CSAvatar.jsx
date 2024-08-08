// react
import { Link } from 'react-router-dom';

// headlessui
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

// icons & img
import CSAvatarImg from "../../../../assets/images/avatars/cs-avatar.png"
import { ChevronUpIcon } from "@heroicons/react/24/solid";


// data
import contactMethods from "./CSAvatar-data"

export default function CSAvatar() {

    return(
    <div className='relative z-1000'>

        <Menu as="div" className="bottom-20 sm:bottom-4 fixed right-4 inline-block text-left">
        
        {/* <Menu as="div" className={`fixed right-4 inline-block text-left
            ${ isLoggedIn ? "bottom-20 sm:bottom-4" : "bottom-4" }`}> */}

        <div>
            <MenuButton>
                <CSAvatarIcon />           
            </MenuButton>
        </div>

        <div className='relative'>
        <MenuItems
            anchor="bottom end"
            modal={false}
            className="absolute right-12 z-10 mb-2 w-72 origin-top-left [--anchor-gap:16px]
            divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
            
            <div className="py-3">
                <p className='px-6 py-2 font-bold text-lg'>請問有咩可以幫到您？🥰</p>  
            </div>

            {contactMethods.map((method, index) => (
            <div key={index} className="px-6 py-4 text-base">
            <MenuItem>
                <Link 
                    to={method.to} 
                    target={method.isLink ? '_blank' : undefined}
                    className={`${method.isLink ? "cursor-pointer" : "cursor-default"}`}
                    >
                    <div className='flex items-center text-gray-700'>
                        <method.icon aria-hidden="true" className="mr-3 h-5 w-5" />
                        <p className='font-semibold'>{method.methodName}</p>
                    </div>
                    <div className='text-violet-700'>
                        {method.info}
                    </div>
                    <div className='text-sm font-light text-gray-700'>
                        {method.description}
                    </div>                
                </Link>
            </MenuItem>
            </div>
            ))}
        
        </MenuItems>
        </div>

        </Menu>
    </div>
    );

}

function CSAvatarIcon() {
    return(
        <div>
            <div className="
            bg-violet-400 w-16 sm:w-24 sm:h-24 flex items-end rounded-full overflow-hidden">
                <img 
                    src={CSAvatarImg} alt="customer service staff"
                    className="max-w-16 max-h-16 sm:max-w-24 sm:max-h-24 w-full h-full mx-auto"
                    />
            </div>
            <div className="fixed bottom-20 right-3 sm:bottom-2 sm:right-2 h-6 w-6 sm:h-10 sm:w-10 
            rounded-full bg-amber-500 flex justify-center items-center">
                <ChevronUpIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
        </div>
    );
}