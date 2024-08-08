// react
import { useState } from "react";

// components
import ButtonPopup from "./ButtonPopup";
import CancelPolicyStart from "../cancel-policy/CancelPolicyStart";
import CancelPolicyAnncouncement from "../cancel-policy/CancelPolicyAnncouncement";
import CancelPolicyComplete from "../cancel-policy/CancelPolicyComplete";

export default function UpdateTravelDateButtonPopup() {

    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
      setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        console.log("Back To Update Front Page");
    }

    return(

        <ButtonPopup>
            {currentStep === 1 && <CancelPolicyStart onClick={handleNext} />}
            {currentStep === 2 && <CancelPolicyAnncouncement onClick={handleNext} />}
            {currentStep === 3 && <CancelPolicyComplete onClick={handleBack}/>}
        </ButtonPopup>


    )
}