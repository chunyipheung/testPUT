// icons
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

// components
import AnnouncementType from "../update-public/AnnouncementType";
import PopupTopBar from "../button-popup/PopupTopBar";
import PopupContent from "../button-popup/PopupContent";
import PopupNextStepButton from "../button-popup/PopupNextStepButton";

// data
const cancelWarnings = [
    "我的保單將於起保日期（DDMMYYYY）終止。",
    "保單條款6.9已列明保單終止須知。",
    "我會失去保單內的保障和利益。",
    "若您重新申請此保單，新保單的生效日期也將重新計算。",
];

export default function CancelPolicyAnncouncement({ onPrevious, onClose, onNext }) {

    return(
    <>
        <PopupTopBar onPrevious={onPrevious} onClose={onClose}/>

        <PopupContent>

            <AnnouncementType 
                title="最後，我明白"
                Icon={ExclamationCircleIcon}
                warnings={cancelWarnings}
            />

            <PopupNextStepButton wording="確認退保" onClick={onNext}/>

        </PopupContent>
    </>
    );

}