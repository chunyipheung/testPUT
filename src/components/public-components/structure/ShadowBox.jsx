export default function ShadowBox({children, moreClassName}) {

    return(

        <div className={`overflow-hidden bg-white
            rounded-xl
            ring-1 ring-gray-900/5 
            shadow-[0_3px_12px_4px] shadow-gray-300/20
            ${moreClassName}
            `}>
          {children}
        </div>

    );

}