// react

// components
import PopupContent from "../button-popup/PopupContent";
import PopupNextStepButton from "../button-popup/PopupNextStepButton";
import PopupTopBar from "../button-popup/PopupTopBar";
import TitleAndChildren from "../update-public/TitleAndChildren";
import InsuredInfoBox from "./InsuredInfoBox";

// data
import { insuredObjectList } from "../../policy-details/policy-details-data";

export default function UpdateInsuredConfirmInfo({
  onPrevious,
  onClose,
  onNext,
}) {
  return (
    <>
      <PopupTopBar onPrevious={onPrevious} onClose={onClose} />

      <PopupContent>
        <TitleAndChildren title="😊 請確認您已更改的受保人資料">
          <div className="space-y-6 pt-8">
            <InsuredInfoBox
              roleName={insuredObjectList["insured1"].roleName}
              isPolicyHolder={insuredObjectList["insured1"].isPolicyHolder}
              insuredObject={insuredObjectList["insured1"].insuredObject}
            />
          </div>
        </TitleAndChildren>

        <PopupNextStepButton wording="確認提交" onClick={onNext} />
      </PopupContent>
    </>
  );
}
