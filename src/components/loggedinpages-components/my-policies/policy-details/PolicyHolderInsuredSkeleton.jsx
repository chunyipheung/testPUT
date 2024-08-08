// components
import PolicyDetailsBox from "./PolicyDetailsBox";
import NameCard from "./NameCard";

// skeleton data
const skeletonInfoData = [
    {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},
];

export default function PolicyHolderInsuredSkeleton() {
    return(
        <PolicyDetailsBox isSkeleton={true}>
            <NameCard 
            infoData={skeletonInfoData} 
            isSkeleton={true}
            />
        </PolicyDetailsBox>
    );
}