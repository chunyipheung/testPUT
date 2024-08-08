// images
import sampleAvatar from "../../../../assets/images/avatars/sample-avatar.png" 
import { UserCircleIcon } from "@heroicons/react/24/solid"

// mui
import { Skeleton, Typography } from "@mui/material"

export default function NameCard({roleName, infoData, isPolicyHolder=false, isSkeleton=false}) {
  return (
<>
    <div className="
        overflow-hidden bg-white
        rounded-xl
        ring-1 ring-gray-900/5 
        shadow-[0_3px_12px_4px] shadow-gray-300/20
        px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="pt-6 px-4 sm:pt-0 text-base sm:font-light font-semibold text-gray-700
            flex items-center">
                {isSkeleton ? 
                <>
                    <Skeleton variant="circular" className="!h-8 w-8"/>
                    <Typography variant="body"><Skeleton className='w-20 ml-4' /></Typography>
                </> : 
                <>
                    {isPolicyHolder?
                        <img src={sampleAvatar} className="block w-full max-w-10 mr-2"/> :
                        <UserCircleIcon className="h-9 w-9 mr-2 text-amber-400" />
                    }
                    {roleName}
                </>
                }
            </dt>
            <dd className="mt-4 text-md sm:text-base font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <dl className="grid grid-cols-1 sm:grid-cols-2">
                {infoData.map((data, index) => (
                    <div key={index} className="px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-extralight leading-1 text-gray-700">
                            {isSkeleton ? <Skeleton className="w-16"/> : data.itemName}
                        </dt>
                        <dd className="mt-1 text-base leading-1 text-gray-700 sm:mt-2">
                            {isSkeleton ? <Skeleton className="w-32"/> : data.itemDetail}
                        </dd>
                </div>
                ))}
                </dl>
            </dd>
    </div>
</>
  )
}
