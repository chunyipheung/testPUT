// react
import { Link } from 'react-router-dom';

// icons
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default function MobileAccountPart() {

    return(

        <div className="py-2">
                <Link
                  to="/"
                  className="text-base font-semibold leading-7 text-gray-900"
                > 
                  <button className="flex items-center py-3">
                      <ArrowRightStartOnRectangleIcon className="h-5 w-5 mr-3"/>
                      <div className="pl-1">登出</div>
                  </button>
                </Link>
              </div>

    );

}