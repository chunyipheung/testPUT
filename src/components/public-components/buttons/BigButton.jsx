import { Link } from "react-router-dom";

export default function BigButton({children, to}) {
    return(
        <div className="mt-12 ">
        <Link
          to={to}
          className="rounded-full
           bg-violet-700 px-12 py-6 
           text-md font-semibold text-white shadow-sm 
           hover:bg-purple-500 
           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
        >
          {children}<span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    );
}