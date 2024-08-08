// react
import React from "react";
import { useState} from "react";
// icons
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

// components
import PasswordHints from "../../loginpages-components/loginprocess-components/PasswordHints";

// css
import "../../loginpages-components/loginprocess-components/eye-icon.css"

const CustomInput = React.forwardRef(({
  name,
  type,
  autoComplete,
  label,
  needIcon = false,
  needPasswordHints = false,
  errorsRequirement = false,
  moreClassName,
  ...props
}, ref) => {


  const [isVisible, setVisible] = useState(false);

  function handleClick() {
    setVisible((prevState) => !prevState);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <label className="relative mb-2 rounded-md shadow-sm w-full">
          <input
            required
            className={`text-base font-semibold outline-none border-gray-400
            block w-full rounded-md border-0 pt-7 pb-3 px-5 text-gray-900  
            ring-1 ring-inset shadow-sm ring-gray-300
            focus:ring-2 focus:ring-inset focus:ring-violet-700 sm:leading-6
            duration-200 peer bg-inherit 
            ${errorsRequirement ? "ring-1 ring-inset ring-red-600 bg-orange-50 focus:ring-red-600" :""}
            ${moreClassName}`}
            id={name}
            name={name}
            type={isVisible ? "text" : type}
            autoComplete={autoComplete}
            {...props}
          />
          <span
            className={`absolute left-0 top-1/3 px-3 text-base tracking-wide
          peer-focus:text-violet-700 pointer-events-none duration-200
          peer-focus:text-sm peer-focus:-translate-y-3 bg-inherit ml-2
          peer-valid:text-sm peer-valid:-translate-y-3 peer-valid:text-gray-400
          ${errorsRequirement ? "text-red-600 peer-focus:text-red-600 peer-valid:text-red-400" :""}
          `}
          >
            {label}
          </span>
          {needIcon && (
            <div
              className="pointer-events-auto absolute inset-y-0 top-1 right-2 flex items-center pr-3"
              onClick={handleClick}
            >
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {!isVisible ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                )}
              </button>
            </div>
          )}
        </label>
      </div>
      {errorsRequirement && (
          <div className="!-mt-1 text-sm text-red-600 flex">
            <ExclamationCircleIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            {errorsRequirement.message}
          </div>
      )} 
      {needPasswordHints && <PasswordHints />}
    </>
  );
})

export default CustomInput;