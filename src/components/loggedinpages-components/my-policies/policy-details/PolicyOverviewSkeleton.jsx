// components
import PolicyDetailsBox from "./PolicyDetailsBox";
import PartOverview from "./PartOverview";

// skeleton data
const data = [
    {id:1},{id:2},{id:3},{id:4},{id:5},
    {id:6, itemName:"文件下載", },
];

export default function PolicyOverviewSkeleton() {
    return(
        <PolicyDetailsBox isSkeleton={true} isPersonSection={false}>
            <PartOverview data={data} isSkeleton={true}/>
        </PolicyDetailsBox>
    );
}