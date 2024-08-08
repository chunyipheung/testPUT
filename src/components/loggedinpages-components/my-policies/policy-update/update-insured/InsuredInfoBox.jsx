// images
import { UserCircleIcon } from "@heroicons/react/24/solid";
import sampleAvatar from "../../../../../assets/images/avatars/sample-avatar.png";

export default function InsuredInfoBox({
  roleName,
  insuredObject,
  isPolicyHolder = false,
}) {
  return (
    <div
      className="
        overflow-hidden bg-white
        rounded-xl
        ring-1 ring-gray-900/5
        shadow-[0_3px_12px_4px] shadow-gray-300/20
        py-8 px-10 sm:py-10 sm:px-14 gap-4"
    >
      <dt className="flex items-center sm:text-lg font-semibold text-gray-700">
        {isPolicyHolder ? (
          <img
            src={sampleAvatar}
            alt="sample-avatar"
            className="block w-full max-w-10 mr-2"
          />
        ) : (
          <UserCircleIcon className="h-9 w-9 mr-2 text-amber-400" />
        )}
        {roleName}
      </dt>

      <dd className="pt-4 sm:pt-6 text-md sm:text-base font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          {Object.entries(insuredObject).map(([key, value], index) => (
            <div key={index} className="py-4 sm:col-span-1 sm:px-0">
              <dt className="text-sm font-extralight leading-1 text-gray-700">
                {key}
              </dt>
              <dd className="mt-1 text-base leading-1 text-gray-700 sm:mt-2">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </dd>
    </div>
  );
}
