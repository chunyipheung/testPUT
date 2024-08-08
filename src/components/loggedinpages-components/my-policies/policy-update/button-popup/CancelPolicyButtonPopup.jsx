// react
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// mui
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// components
import CancelPolicyAnncouncement from "../cancel-policy/CancelPolicyAnncouncement";
import CancelPolicyComplete from "../cancel-policy/CancelPolicyComplete";
import CancelPolicyStart from "../cancel-policy/CancelPolicyStart";
import StartApplicationButton from "./StartApplicationButton";

// css
import "../../../../../components/public-components/buttons/button.css";
import "./ButtonPopup.css";

export default function CancelPolicyButtonPopup() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
    setCurrentStep(1);
    setSearchParams({ step: 1 });
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/my-account/my-policies/policy-update/cancel-policy");
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(
    parseInt(searchParams.get("step")) || 1
  );

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    setSearchParams({ step: currentStep - 1 });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    setSearchParams({ step: currentStep + 1 });
  };

  return (
    <>
      <StartApplicationButton onClick={handleClickOpen} />

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="cancel-policy"
      >
        {currentStep === 1 && (
          <CancelPolicyStart
            onPrevious={handleClose}
            onClose={handleClose}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <CancelPolicyAnncouncement
            onPrevious={handlePrevious}
            onClose={handleClose}
            onNext={handleNext}
          />
        )}
        {currentStep === 3 && (
          <CancelPolicyComplete
            onPrevious={handlePrevious}
            onClose={handleClose}
            onNext={handleClose}
          />
        )}
      </Dialog>
    </>
  );
}
