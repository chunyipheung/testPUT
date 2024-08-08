// icons
import { LightBulbIcon } from "@heroicons/react/24/outline";

// components
import AnnouncementType from "../update-public/AnnouncementType";
import PopupTopBar from "../button-popup/PopupTopBar";
import PopupContent from "../button-popup/PopupContent";
import PopupNextStepButton from "../button-popup/PopupNextStepButton";

// data
const cancelWarnings = [
    "請注意，有關退保事項在獲得我們電郵回覆作實方才有效。",
    "請於今日起14天內把保單正本郵寄/親身交回聯誠。",
    "如果你有任何疑問，請聯絡我們的客戶服務部（電話：28023138）。",
];

export default function CancelPolicyComplete({ onPrevious, onClose, onNext }) {

    return(
    <>
        <PopupTopBar onPrevious={onPrevious} onClose={onClose} />

        <PopupContent>

            <AnnouncementType 
                title="📃 我們已接獲您的退保申請，將在72小時內處理，將以電郵回覆您結果。"
                Icon={LightBulbIcon}
                warnings={cancelWarnings}
            />

            <PopupNextStepButton wording="返回" onClick={onNext}/>

        </PopupContent>
    </>
    );

}