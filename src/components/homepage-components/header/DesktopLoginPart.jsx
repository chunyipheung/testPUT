// react
import { Link } from 'react-router-dom';

// icons
import { UserCircleIcon } from "@heroicons/react/24/outline";
import AvatarImage from "../../../assets/images/avatars/sample-avatar.png"

export default function DesktopLoginPart() {

    return(

        <div className="h-10 hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="flex content-center px-3 text-xl font-semibold leading-none text-gray-900"
          >
            <button  className="flex justify-center items-center">
              <UserCircleIcon className="h-6"/>
              <div className="pl-1">登入</div>
            </button>
          </Link>
        </div>

    );

}