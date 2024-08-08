// react
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// icons
import { PencilSquareIcon } from "@heroicons/react/24/outline";

// components
import SubTitle from "../../../public-components/structure/SubTitle";
import LeftChoiceTab from "../policy-update/LeftChoiceTab";
import LeftChoiceTabButton from "../policy-update/LeftChoiceTabButton";
import RightExecutionBox from "../policy-update/RightExecutionBox";
import CancelPolicyButtonPopup from "../policy-update/button-popup/CancelPolicyButtonPopup";
import ExtendTravelDateButtonPopup from "../policy-update/button-popup/ExtendTravelDateButtonPopup";
import UpdateBeneficiaryButtonPopup from "../policy-update/button-popup/UpdateBeneficiaryButtonPopup";
import UpdateInsuredButtonPopup from "../policy-update/button-popup/UpdateInsuredButtonPopup";
import UpdateTravelDateButtonPopup from "../policy-update/button-popup/UpdateTravelDateButtonPopup";

// data
import {
  executionData,
  leftBarData,
} from "../policy-update/policy-update-data";

export default function PolicyUpdate() {
  const isSkeleton = false;
  const { topic } = useParams();
  const navigate = useNavigate();
  const [currentTopic, setCurrentTopic] = useState("update-insured");

  useEffect(() => {
    if (topic && executionData[topic]) {
      setCurrentTopic(topic);
    }
  }, [topic]);

  function handleClick(selectedTopic) {
    setCurrentTopic(selectedTopic);
    navigate(`/my-account/my-policies/policy-update/${selectedTopic}`, {
      replace: true,
    });
  }

  return (
    <div className="space-y-12">
      <div>
        <SubTitle
          isSkeleton={isSkeleton}
          IconImg={PencilSquareIcon}
          sectionName="更改我的保單"
        />
        <div className="lg:flex lg:gap-6 block space-y-6 lg:space-y-0">
          <div className="lg:flex-none lg:w-80">
            <LeftChoiceTab>
              {leftBarData.map((singleTab, index) => {
                return (
                  <LeftChoiceTabButton
                    key={index}
                    id={singleTab.id}
                    title={singleTab.title}
                    Icon={singleTab.icon}
                    isSelected={currentTopic === singleTab.id}
                    onClick={() => handleClick(singleTab.id)}
                  />
                );
              })}
            </LeftChoiceTab>
          </div>

          {currentTopic && (
            <div className="lg:flex-initial w-full">
              <RightExecutionBox
                title={executionData[currentTopic].title}
                warnings={executionData[currentTopic].warnings}
                id={executionData[currentTopic].id}
              >
                {currentTopic === "update-insured" && (
                  <UpdateInsuredButtonPopup />
                )}
                {currentTopic === "update-travel-date" && (
                  <UpdateTravelDateButtonPopup />
                )}
                {currentTopic === "extend-travel-date" && (
                  <ExtendTravelDateButtonPopup />
                )}
                {currentTopic === "update-beneficiary" && (
                  <UpdateBeneficiaryButtonPopup />
                )}
                {currentTopic === "cancel-policy" && (
                  <CancelPolicyButtonPopup />
                )}
              </RightExecutionBox>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
