// components
import PopupContent from "../button-popup/PopupContent";
import PopupNextStepButton from "../button-popup/PopupNextStepButton";
import PopupTopBar from "../button-popup/PopupTopBar";
import TitleAndChildren from "../update-public/TitleAndChildren";
import InsuredInfoBox from "./InsuredInfoBox";

// data
import { insuredObjectList } from "../../policy-details/policy-details-data";

export default function UpdateInsuredEditInfo({
  onPrevious,
  onClose,
  onNext,
  currentInsured,
}) {
  return (
    <>
      {currentInsured in insuredObjectList && (
        <>
          <PopupTopBar onPrevious={onPrevious} onClose={onClose} />

          <PopupContent>
            <TitleAndChildren title="✒️ 更改受保人資料">
              <div className="space-y-6 pt-8">
                <InsuredInfoBox
                  roleName={insuredObjectList[currentInsured].roleName}
                  isPolicyHolder={
                    insuredObjectList[currentInsured].isPolicyHolder
                  }
                  insuredObject={
                    insuredObjectList[currentInsured].insuredObject
                  }
                />
              </div>
            </TitleAndChildren>

            <PopupNextStepButton wording="確認" onClick={onNext} />
          </PopupContent>
        </>
      )}
    </>
  );
}
