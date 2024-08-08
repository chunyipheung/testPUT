export default function BlueSolidBadge({children}) {

    return(
        <>
        <span className="inline-flex items-center rounded-full bg-sky-400 
        px-2 py-1 text-xs font-medium 
        text-white ">
        {children}
      </span>
        </>
    );

}