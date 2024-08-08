import { Link } from "react-router-dom";

export default function TabButton({ children, to, active=false }) {
    return (
      
      <li className="w-1/2">
        <Link to={to}>
        <button 
            className={`shadow w-full text-center rounded-lg py-3
             focus:bg-violet-700 focus:text-white text-base
             ${active ? "bg-violet-700 text-white text-semibold" : "bg-white"}
             `}>
          {children}
        </button>
        </Link>
      </li>

    );
  }
