import PolicyOverviewSkeleton from "../policy-details/PolicyOverviewSkeleton";
import PolicyHolderInsuredSkeleton from "../policy-details/PolicyHolderInsuredSkeleton";

export default function PolicyDetailsSkeleton() {

    return (
        <div className="space-y-10 sm:space-y-16">
            <PolicyOverviewSkeleton />
            <PolicyHolderInsuredSkeleton />
        </div>
    );

}