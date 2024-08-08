// icons
import { ChevronRightIcon, } from '@heroicons/react/24/outline'

export default function LeftChoiceTab({title, id, Icon, isSelected, ...props}) {

  return (
    <div>
    <div
        id={id}
        className={`cursor-pointer p-4 hover:bg-gray-100 border-l-4 hover:border-violet-700
          ${isSelected ? "bg-gray-100 border-violet-700" : "border-transparent"}`}
        {...props}
    >
        <div className="flex flex-col">
        <div className="flex justify-between">
            <div className="flex items-center">
            <Icon className="h-5 w-5 mr-2 text-gray-600" />
            <p className="font-normal text-gray-900">{title}</p>
            </div>
            <span>
            <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-600" />
            </span>
        </div>
        </div>
    </div>
    </div>
  )
}