// react
import { Link } from 'react-router-dom';
// icons
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function MobileLoginPart() {

  return(

    <div className="py-6 sm:space-y-3">
      <Link
        to="/login"
        className="text-base font-semibold leading-7 text-gray-900 
        rounded-lg -ml-2 pl-2 block"> 
        <button className="flex items-center py-2">
          <UserCircleIcon className="h-6"/>
          <div className="pl-1">登入</div>
        </button>
      </Link>

    </div>

  );

}