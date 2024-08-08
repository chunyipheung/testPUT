// // react
// import { Link } from 'react-router-dom';

// // headlessui
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";

// // icons
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

// export default function MobileProductsNavItems({navName, productData, open, classNames}) {

//     return(
//         <Disclosure as="div" className="-mx-3">
//             {({ open }) => (
//             <>
//                 <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
//                 {navName}
//                 <ChevronDownIcon
//                     className={classNames(
//                     open ? "rotate-180" : "",
//                     "h-5 w-5 flex-none"
//                     )}
//                     aria-hidden="true"
//                 />
//                 </DisclosureButton>
//                 <DisclosurePanel className="mt-2 space-y-2">
//                 {[...productData].map((item) => (
//                     <DisclosureButton
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                     >
//                     {item.name}
//                     <ul className="font-thin">
//                         {item.items.map((singleitem, index) => (
//                         <li key={index}>
//                             <Link to={singleitem.href}>
//                             {singleitem.name}
//                             </Link>
//                         </li>
//                         ))}
//                     </ul>
//                     </DisclosureButton>
//                 ))}
//                 </DisclosurePanel>
//             </>
//             )}
//         </Disclosure>
//     );

// }

import { Link } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function MobileProductsNavItems({ navName, productData, open, classNames }) {
  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
            {navName}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none"
              )}
              aria-hidden="true"
            />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 space-y-4">
            {productData.map((product) => (
              <div key={product.name} className="space-y-1">
                <DisclosureButton
                  as="a"
                  href={product.href}
                  className="block rounded-lg py-1 pl-5 pr-3 text-base font-semibold leading-7 text-gray-800 flex items-center"
                >
                  <product.icon className="h-5 w-5 mr-2" />
                  {product.name}
                </DisclosureButton>
                <ul className="font-light">
                  {product.items.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href} 
                      className="block rounded-lg pl-12 py-1 text-base leading-7 text-gray-800 
                      hover:bg-purple-50 hover:text-violet-700 hover:font-normal
                      focus:bg-purple-50 focus:text-violet-700 focus:font-normal
                      ">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}