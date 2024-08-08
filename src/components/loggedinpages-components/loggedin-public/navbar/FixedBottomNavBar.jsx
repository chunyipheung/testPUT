
// react
import { Link } from 'react-router-dom';

// data
import LoggedInHeaderBottomLink from "./loggedin-header-bottom-data"

// export default function FixedBottomNavBar({whichPageNow}) {

//     return (
//         <div className="fixed bottom-0 left-0 right-0 
//         flex flex-row justify-around bg-purple-500 text-violet-200
//         sm:hidden block z-20 shadow-[0_-2px_10px] shadow-violet-500/20
//         ">
//           { LoggedInHeaderBottomLink.map((link, index) => (
//               <Link
//               key={index}
//               to={link.to}
//               className={`flex flex-col justify-center items-center
//               leading-6 text-xs w-16
//               rounded-xl
//               ${whichPageNow === link.id ? "text-white font-semibold -translate-y-3.5" : ""}
//               `}
//             > 
//               { whichPageNow === link.id ? 
//               <div className="bg-amber-500
//                text-white p-3 rounded-full shadow-md shadow-amber-500/50">
//                 <link.activeIcon className="h-5 w-5"/></div>
//                :
//               <link.activeIcon className="h-5 w-5"/>
//               } {link.name}
//               </Link>
//           )) }
//         </div>
//     );

// }

export default function FixedBottomNavBar({whichPageNow}) {

  return (
      <div className="fixed bottom-0 left-0 right-0 
      flex flex-row justify-around bg-white pb-2 pt-3
      sm:hidden block z-20 shadow-[0_-2px_10px] shadow-gray-300/20
      ">
        { LoggedInHeaderBottomLink.map((link, index) => (
            <Link
            key={index}
            to={link.to}
            className={`flex flex-col justify-center items-center
            leading-6 text-xs w-16
            rounded-xl
            ${whichPageNow === link.id ? "text-violet-700" : ""}
            `}
          > 
            { whichPageNow === link.id ? 
            <><link.activeIcon className="h-5 w-5"/>{link.name}</>:
            <><link.icon className="h-5 w-5"/>{link.name}</>
            } 
            </Link>
        )) }
      </div>
  );

}
