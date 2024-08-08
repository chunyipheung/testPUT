// icons
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline'

// react
import { Link } from 'react-router-dom'

// mui
import { Skeleton } from '@mui/material'

export default function PartDownload({downloadData, isSkeleton=false}) {
 //console.log(downloadData);
  return (
        <ul role="list" className="my-4 divide-y divide-gray-100 rounded-md border border-gray-200">
        {downloadData.map((data, index) => (
            data.fileLink !== "#" && (
            <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-base leading-6">
                <div className="flex w-0 flex-1 items-center">
                <div className="ml-2 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">
                        {isSkeleton ? <Skeleton className="w-20" />: data.fileName}</span>
                </div>
                </div>
                { isSkeleton ? <Skeleton className="w-14" /> :
                    <Link to={data.fileLink} target="_blank" rel="noopener">
                        <div className="ml-4 flex-shrink-0 px-3 py-2
                        rounded-full border border-amber-500
                        bg-amber-50
                        text-amber-600 hover:text-amber-500
                        flex items-center 
                        font-medium text-xs
                        ">
                            <ArrowDownOnSquareIcon className="h-4 w-4" />
                            下載
                        </div>
                    </Link>
                }
            </li>
            )
        ))}
        </ul>
        
  )
}
