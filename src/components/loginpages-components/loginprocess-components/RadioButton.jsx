// react
import React from "react";

// headlessUI
import { Radio, RadioGroup } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const RadioButton = React.forwardRef(({ 
  settings, value, onChange, ...props
}, ref) => {

  return (
    <fieldset aria-label="Privacy setting" ref={ref} {...props}>
      <RadioGroup 
        value={value} 
        onChange={onChange} 
        className="-space-y-px rounded-md bg-white">
        {settings.map((setting, settingIdx) => (
          <Radio
            key={setting.name}
            value={setting.name}
            aria-label={setting.name}
            aria-description={setting.description}
            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'z-10 border-violet-200 bg-purple-50' : 'border-gray-200',
                'relative flex cursor-pointer border p-4 focus:outline-none',
              )
            }
          >
            {({ focus, checked }) => (
              <>
                <span
                  className={classNames(
                    checked ? 'border-transparent bg-violet-700' : 'border-gray-300 bg-white',
                    focus ? 'ring-2 ring-violet-700 ring-offset-2' : '',
                    'mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border',
                  )}
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span className="ml-3 flex flex-col">
                  <span
                    className={classNames(checked ? 'text-violet-700' : 'text-gray-900', 'block text-base font-medium')}
                  >
                    {setting.name}
                  </span>
                  <span className={classNames(checked ? 'text-violet-700' : 'text-gray-500', 'block text-base')}>
                    {setting.description}
                  </span>
                </span>
              </>
            )}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
})

export default RadioButton;
