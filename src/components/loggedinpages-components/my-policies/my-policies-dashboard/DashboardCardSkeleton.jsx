// mui
import { Skeleton, Typography } from '@mui/material';

export default function DashboardCardSkeleton() {

  return (

      <div className="relative flex justify-center items-center 
        space-x-4
        sm:space-x-6
        px-4 sm:px-6 py-2 md:py-0
        my-6 sm:my-11 
        rounded-xl
        ring-1 ring-gray-900/5 hover:ring-0
        shadow-[0_3px_12px_4px] shadow-gray-300/20
        hover:shadow-[0_0_20px_4px] hover:shadow-gray-500/20
        ">

        {/* insurance image */}
        
        <div className="h-24 w-24
            lg:h-52 lg:w-52
            md:h-44 md:w-44 
            sm:h-32 sm:w-32">
           <Skeleton className="!h-full w-full"/> 
        </div>
        
        {/* insurance details */}
        <div className="flex min-w-0 gap-x-4 w-full xl:pl-4">

        <div className="min-w-0 flex-auto">
            <div>
            <Skeleton className='w-10' /> 
            <Typography variant="h3"><Skeleton className='w-28'/></Typography>
            </div>
            
            <div className='flex flex-col items-start 
            sm:grid sm:grid-cols-2 w-full
            gap-x-10 md:gap-x-16 lg:gap-x-48 gap-y-0 w-full'>
            <div>
                <div className="hidden md:block">
                <Typography variant="body"><Skeleton className='w-16'/></Typography>
                </div>
                <div>
                <Typography variant="body"><Skeleton className='w-36'/></Typography>
                </div>
            </div>
            <div>
                <div className="hidden md:block">
                <Typography variant="body"><Skeleton className='w-16'/></Typography>
                </div>
                <div>
                <Typography variant="body"><Skeleton className='w-24'/></Typography>
                </div>
            </div>
            </div>

        </div>
        </div>

        {/* vertical divider */}
        <div className="border-l h-36 border-gray-200 hidden md:block"></div>

        {/* click-in button */}
        <div className="flex flex-col items-center md:w-1/4 hover:cursor-pointer">
        <div>
            <Skeleton variant='circular' className='!h-6 w-6'/>
        </div>
        <div className="hidden md:block">
            <Typography variant="body"><Skeleton className='w-20'/></Typography>
        </div>
        </div>
    </div>

  )
}




