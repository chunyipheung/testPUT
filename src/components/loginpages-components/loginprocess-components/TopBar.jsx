import { Link } from 'react-router-dom';
import { XCircleIcon } from "@heroicons/react/24/outline"

export default function TopBar() {

    return(
        <div className="
        flex items-center justify-between px-4"
        >
            <div>
                <Link to="/">
                <img
                    className="h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=700"
                    alt="Your Company"
                />
                </Link>
            </div>
            <div>
                <Link to="/">
                <XCircleIcon className="h-10 "/>
                </Link>
            </div>
        </div>
    );

}