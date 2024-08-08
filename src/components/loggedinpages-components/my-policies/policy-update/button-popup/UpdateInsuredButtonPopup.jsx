// react
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// mui
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// components
import CancelPolicyComplete from "../cancel-policy/CancelPolicyComplete";
import UpdateInsuredConfirmInfo from "../update-insured//UpdateInsuredConfirmInfo";
import UpdateInsuredStart from "../update-insured/UpdateInsuredStart";
import StartApplicationButton from "./StartApplicationButton";

// css
import "../../../../../components/public-components/buttons/button.css";
import "./ButtonPopup.css";

export default function UpdateInsuredButtonPopup() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
    setCurrentStep(1);
    setSearchParams({ step: 1 });
  };

  const [currentStep, setCurrentStep] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClose = () => {
    setOpen(false);
    navigate("/my-account/my-policies/policy-update/update-insured");
  };

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
          <UpdateInsuredStart
            onPrevious={handleClose}
            onClose={handleClose}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <UpdateInsuredConfirmInfo
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
