// icons
import { DocumentTextIcon, UsersIcon, GiftIcon } from "@heroicons/react/24/outline";

// components
import PolicyDetailsBox from "../policy-details/PolicyDetailsBox";
import PartOverview from "../policy-details/PartOverview";
import NameCard from "../policy-details/NameCard";
import BeneficiaryNameCard from "../policy-details/BeneficiaryNameCard";

export default function PolicyDetails(policyData) {
    const overview = policyData?.policyData?.data?.overview;
    const roleList = policyData?.policyData?.data?.roleList || [];
    const beneficiaryRoleList = policyData?.policyData?.data?.beneficiaryRoleList || [];
    
    return(
        <div className="space-y-10 sm:space-y-16">
            <PolicyDetailsBox sectionName="保單概覽" iconImg={DocumentTextIcon} isPersonSection={false}>
                {overview ? <PartOverview data={overview} /> : ''}
            </PolicyDetailsBox>
            <PolicyDetailsBox sectionName="保單申請人及受保人" iconImg={UsersIcon}>
            {roleList.map((role, index) => (
                role.dataListArray.length > 0 && (
                    <NameCard 
                    key={index} 
                    roleName={role.roleName} 
                    infoData={role.dataListArray} 
                    isPolicyHolder={role.isPolicyHolder} 
                    />
                )
                ))}
            </PolicyDetailsBox>
            {beneficiaryRoleList.length > 0 && 
                <PolicyDetailsBox sectionName="受益人" iconImg={GiftIcon}>
                {beneficiaryRoleList.map((role, index) => (
                    role.beneficiaryList.length > 0 && (
                        <BeneficiaryNameCard 
                        key={index} 
                        insuredOrder={role.insuredOrder}
                        insuredName={role.insuredName} 
                        isPolicyHolder={role.isPolicyHolder}
                        beneficiaryList={role.beneficiaryList}
                        />
                    )
                    ))}
                </PolicyDetailsBox>
            }
            
        </div>
    );

}