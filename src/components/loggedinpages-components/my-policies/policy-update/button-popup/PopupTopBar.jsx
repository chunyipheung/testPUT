// icons
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

// mui
import DialogTitle from "@mui/material/DialogTitle";

export default function PopupTopBar({
  needPreviousButton = true,
  onPrevious,
  onClose,
}) {
  return (
    <DialogTitle
      id="cancel-policy-title"
      className="flex items-center justify-between text-gray-500"
    >
      {needPreviousButton ? (
        <button
          className="rounded-full hover:bg-gray-100 p-2"
          onClick={onPrevious}
        >
          <ChevronLeftIcon className="h-7 w-7" />
        </button>
      ) : null}
      <button className="rounded-full hover:bg-gray-100 p-2" onClick={onClose}>
        <XMarkIcon className="h-7 w-7" />
      </button>
    </DialogTitle>
  );
}
