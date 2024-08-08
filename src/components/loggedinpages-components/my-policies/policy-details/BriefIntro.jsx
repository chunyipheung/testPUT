// react
import { useNavigate } from 'react-router-dom';


// icons
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// components
import GreenSolidBadge from "../../../public-components/badges/GreenSolidBadge";
import GrayBadge from "../../../public-components/badges/GrayBadge";
import BlueSolidBadge from "../../../public-components/badges/BlueSolidBadge";

export default function BriefIntro({policyName, state,iconImg,custName,hkid}) {
    /** define **/
    const navigate = useNavigate();

    const IconImg = iconImg || null;
    const params = { custname: custName, hkid: hkid };

    /** function **/
    const handleArrowClick = () => {
        navigate('/my-account/my-policies', { state: { params } });
    };
    return(
        <div>

        <div className="block mb-10 cursor-pointer" onClick={handleArrowClick}>
            <ArrowLeftIcon className="h-6 w-6"/>
        </div>
        
        <div className="ml-2 flex flex-row items-center my-5 space-x-6 sm:space-x-12">

            {/* insurance image */}
            <div className={`
                
                sm:ring-2 ring-offset-4 ring-2
                flex shrink-1
                sm:h-20 sm:w-20
                h-14 w-14
                items-center justify-center rounded-xl
                ${ state === "已失效" ? "bg-gray-50 ring-gray-500": "bg-purple-50 ring-violet-700" }`}>
                <IconImg
                className={`${ state === "已失效" ? "text-gray-500": "text-violet-700"} sm:!text-5xl !text-3xl`}
                aria-hidden="true" />
            </div>

            {/* insurance brief */}
            <div className="flex flex-wrap items-center space-y-2 sm:space-y-0">
                <div className="
                text-2xl
                lg:text-4xl 
                sm:text-3xl
                font-bold sm:leading-8 leading-6 text-gray-900 pr-3">
                {policyName}
                </div>
                { state === "生效中" && <GreenSolidBadge>生效中</GreenSolidBadge> }
                { state === "待生效" && <BlueSolidBadge>待生效</BlueSolidBadge> }
                { state === "已失效" && <GrayBadge>已失效</GrayBadge> }
            </div>

        </div> 

        </div>
    );

}