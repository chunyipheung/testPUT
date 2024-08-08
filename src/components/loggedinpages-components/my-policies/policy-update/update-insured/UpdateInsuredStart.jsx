// react
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// components
import PopupContent from "../button-popup/PopupContent";
import PopupNextStepButton from "../button-popup/PopupNextStepButton";
import PopupTopBar from "../button-popup/PopupTopBar";
import TitleAndChildren from "../update-public/TitleAndChildren";
import InsuredCard from "./InsuredCard";
import UpdateInsuredEditInfo from "./UpdateInsuredEditInfo";

// data
import { insuredList } from "../../policy-details/policy-details-data";

export default function UpdateInsuredStart({
  onPrevious,
  onClose,
  onNext,
  currentStep,
}) {
  const [currentInsured, setNewInsured] = useState();
  const [enterInfoPage, setEnterInfoPage] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleEdit = (selectedInsuredId) => {
    setNewInsured(selectedInsuredId);
    setEnterInfoPage(true);
    setSearchParams({ role: selectedInsuredId });
  };

  const onBubblePrevious = () => {
    setEnterInfoPage(false);
    navigate("/my-account/my-policies/policy-update/update-insured?step=1");
  };

  const onBubbleNext = () => {
    setEnterInfoPage(false);
  };

  return (
    <>
      {!enterInfoPage && (
        <div>
          <PopupTopBar onPrevious={onPrevious} onClose={onClose} />

          <PopupContent>
            <TitleAndChildren title="😊 您好，請問您希望更改邊位受保人資料？">
              <div className="space-y-6 pt-8">
                {insuredList.map((insured, index) => (
                  <InsuredCard
                    key={index}
                    isPolicyHolder={insured.isPolicyHolder}
                    roleName={insured.roleName}
                    name={insured.name}
                    onEdit={() => handleEdit(insured.id)}
                  />
                ))}
              </div>
            </TitleAndChildren>

            <PopupNextStepButton wording="下一步" onClick={onNext} />
          </PopupContent>
        </div>
      )}

      {currentInsured && enterInfoPage && (
        <div>
          <UpdateInsuredEditInfo
            onPrevious={onBubblePrevious}
            onClose={onClose}
            onNext={onBubbleNext}
            currentInsured={currentInsured}
          />
        </div>
      )}
    </>
  );
}
