export default function GreenSolidBadge({children, requiredBigSize=false}) {

    return(
        <>
        <span className={`inline-flex items-center rounded-full bg-emerald-400 px-2 py-1 text-xs font-medium
        ${requiredBigSize ? "lg:px-4 lg:py-2 lg:text-base lg:font-semibold" : ""}
        text-white`}>
        {children}
      </span>
        </>
    );

}