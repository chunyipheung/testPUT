// react
import { Link } from 'react-router-dom';

export default function MdOutlineButton({children}) {
    return(
       <div className="mt-2">
            <Link to="#"
          className="
          text-md text-violet-700
          hover:text-violet-700">
                {children} <span aria-hidden="true"> &rarr;</span>
            </Link>
        </div>
    );
}