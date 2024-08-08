// react
import { useState } from "react";

// mui
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// icons
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

// css
import "../../../../../components/public-components/buttons/button.css";
import "./ButtonPopup.css";

export default function ButtonPopup({ children }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className="accountApplicationButton px-8"
        onClick={handleClickOpen}
      >
        開始申請
      </button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="cancel-policy-title"
      >
        <DialogTitle
          id="cancel-policy-title"
          className="flex items-center justify-between text-gray-500"
        >
          <button className="rounded-full hover:bg-gray-100 p-2">
            <ChevronLeftIcon className="h-7 w-7" onClick={handleClose} />
          </button>
          <button className="rounded-full hover:bg-gray-100 p-2">
            <XMarkIcon className="h-7 w-7" onClick={handleClose} />
          </button>
        </DialogTitle>
        <DialogContent className="!px-8 mtl:w-[600px]">
          <div className="space-y-12">{children}</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
