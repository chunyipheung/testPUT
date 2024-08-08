// react
import { useState } from "react";

// icons
import { LightBulbIcon } from "@heroicons/react/24/outline";

// components
import ShadowBox from "../../../public-components/structure/ShadowBox";

export default function RightExecutionBox({ moreClassName, warnings, title, id, children }) {

    return(

        <ShadowBox moreClassName={`${moreClassName} p-8 sm:p-12 space-y-8`}>
            <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>
            <ul>
                {warnings.map((warning, index) => (
                    <li key={index} className="flex items-center py-1">
                        <LightBulbIcon className="h-5 w-5 mr-2 text-amber-500"/>
                        {warning}
                    </li>
                ))}
            </ul>

            <div id={id}>
                {children}
            </div>

        </ShadowBox>

    );

}