export default function RedBadge({children}) {

    return(
        <>
        <span className="inline-flex items-center rounded-full 
        bg-red-50 px-3 py-1 text-xs font-medium text-red-700 
        ring-1 ring-inset ring-red-600/20">
        {children}
      </span>
        </>
    );

}