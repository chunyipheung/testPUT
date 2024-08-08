// react
import React from "react";

// icons
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

const CustomTextArea = React.forwardRef(({
  name,
  label,
  placeholder,
  errorsRequirement = false,
  moreClassName,
  ...props
}, ref) => {

  return (
    <>
    <div className="flex items-center justify-center">
      <div className="mb-2 rounded-md shadow-sm w-full">
          <div className={`relative block rounded-md pt-9 pb-3 px-3 
                ring-1 ring-inset shadow-sm ring-gray-300 
                focus-within:ring-2 focus-within:ring-inset focus-within:ring-violet-700 
                duration-200 
                ${errorsRequirement ? "ring-1 ring-inset ring-red-600 bg-orange-50 focus-within:ring-red-600" :""}
                ${moreClassName}`}>
              <textarea
                required
                className="w-full bg-inherit outline-none peer py-0
                resize-none border-none text-base sm:leading-6 text-gray-900
                focus:ring-0 focus:border-none"
                id={name}
                name={name}
                placeholder={placeholder}
                rows="5" 
                cols="50"
                autoComplete="off"
                {...props}
              />
            <span
                className={`absolute left-0 top-5 pl-6 text-base tracking-wide
                peer-focus:text-violet-700 pointer-events-none duration-200
                peer-focus:text-sm peer-focus:-translate-y-2 bg-inherit
                peer-valid:text-sm peer-valid:-translate-y-2 peer-valid:text-gray-400
                ${errorsRequirement ? "text-red-600 peer-focus:text-red-600 peer-valid:text-red-400" :""}
                `}>{label}
            </span>
          </div>

      </div>
    </div>
    {errorsRequirement && (
      <div className="!-mt-1 text-sm text-red-600 flex">
        <ExclamationCircleIcon className="h-5 w-5 mr-1" aria-hidden="true" />
        {errorsRequirement.message}
      </div>
    )} 
    </>
  );
})

export default CustomTextArea;