// components
import YellowAlert from "../../../../../components/public-components/alerts/YellowAlert";
import CustomTextArea from "../../../../../components/public-components/forms/CustomTextArea";
import UploadFilesForm from "../../../../../components/public-components/forms/UploadFilesForm";
import TitleAndChildren from "../update-public/TitleAndChildren"
import PopupTopBar from "../button-popup/PopupTopBar";
import PopupContent from "../button-popup/PopupContent";
import PopupNextStepButton from "../button-popup/PopupNextStepButton";

export default function CancelPolicyStart({ onPrevious, onClose, onNext }) {

    return(
    <>
        <PopupTopBar onPrevious={onPrevious} onClose={onClose}/>

        <PopupContent>

            <TitleAndChildren title="😢 很遺憾您的旅程被迫取消">
                <YellowAlert>本保單一經購買，除了外遊警示外，不可取消及退款。</YellowAlert>
                <CustomTextArea 
                    name="cancelPolicyReason" 
                    label="請詳細説明您取消保單的原因"
                    placeholder="" /> 
            </TitleAndChildren>

            <TitleAndChildren title="📁 請上載證明文件">
                <UploadFilesForm />
            </TitleAndChildren>

            <PopupNextStepButton wording="下一步" onClick={onNext}/>

        </PopupContent>
    </>
    );

}
