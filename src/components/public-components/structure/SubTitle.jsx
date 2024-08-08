import { Skeleton, Typography } from "@mui/material";

export default function SubTitle({ isSkeleton, IconImg, sectionName }) {

    return(

        <div className="flex items-center px-4 py-6 sm:px-6  
          text-gray-800">
          {isSkeleton ? 
            <>
              <Skeleton variant="circular" className="!h-8 w-8 mr-2" />
              <Typography variant="h3"><Skeleton className='w-28'/></Typography>
            </> 
            :
            <>
              <IconImg className="h-7 w-7 mr-2" />
              <h3 className="text-xl sm:text-2xl font-semibold leading-7">{sectionName}</h3>
            </>}
        </div>
    );

}