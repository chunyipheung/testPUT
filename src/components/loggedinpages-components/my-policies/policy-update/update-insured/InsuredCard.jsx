// images
import sampleAvatar from "../../../../../assets/images/avatars/sample-avatar.png";

// icons
import { ArrowRightIcon, UserCircleIcon } from "@heroicons/react/24/solid";

// css
import "../../../../public-components/decoration/decoration.css";

export default function InsuredCard({
  isPolicyHolder,
  roleName,
  name,
  onEdit,
}) {
  return (
    <div
      className="cursor-pointer flex justify-between items-center divide-x divide-slate-300/25 rounded-lg customBoxShadow"
      onClick={onEdit}
    >
      <div className="p-6  text-gray-700 flex items-center">
        {isPolicyHolder ? (
          <img src={sampleAvatar} className="block w-full max-w-10 mr-3" />
        ) : (
          <UserCircleIcon className="h-9 w-9 mr-3 text-amber-400" />
        )}
        <div>
          <p className="text-base font-light">{roleName}</p>
          <p className="text-base font-semibold">{name}</p>
        </div>
      </div>

      {/* click-in button */}
      <div className="p-6 flex flex-col items-center md:w-1/4 ">
        <ArrowRightIcon
          aria-hidden="true"
          className="h-5 w-5 text-violet-700"
        />
        <p className="hidden md:block text-base leading-6 text-violet-700 font-semibold">
          更改資料
        </p>
      </div>
    </div>
  );
}
