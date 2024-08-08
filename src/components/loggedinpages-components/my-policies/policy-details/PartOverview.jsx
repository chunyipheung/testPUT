// mui
import { Skeleton } from '@mui/material';

// components
import PartDownload from "./PartDownload"

// skeleton data
const skeletonDownloadList = [
  {id:1},{id:2},{id:3},
];



export default function PartOverview({data, isSkeleton=false}) {
  /** define **/
  const downloadList = data[5]?.itemDetail || [];

  const noData = (
    <div className="px-4 mt-1 text-md sm:text-base font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
      文件已無法下載。若有疑問，請聯絡我們!
    </div>
  );
  
  return (
    <>
      {data.map((policyData, index) => (
        <div key={index} className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 items-center">
           
            <dt className="px-4 py-2 text-sm sm:text-base font-light text-gray-700">
              {isSkeleton ? <Skeleton className='w-20' /> : policyData.itemName}
            </dt>

            { policyData.itemName != "文件下載" ? 
            (<dd className="px-4 mt-1 text-md sm:text-base font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              { isSkeleton ? <Skeleton className="w-40" /> : 
              policyData.itemDetail }
              </dd>):(
            <dd className="mt-4 text-md sm:text-base font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
             {isSkeleton ? 
             <PartDownload downloadData={skeletonDownloadList} isSkeleton={true}/> :
             <>
              {downloadList.length > 0 ? <PartDownload downloadData={downloadList} isSkeleton={isSkeleton} /> : noData}
             </>
            }
            </dd>)
            }

        </div>
      ))}
    </>
  )
}
