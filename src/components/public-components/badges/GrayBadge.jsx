export default function GrayBadge({children}) {

    return(
        <>
        <span className="inline-flex items-center rounded-full 
        bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
        {children}
      </span>
        </>
    );

}