// mui
import DialogContent from '@mui/material/DialogContent';

export default function PopupContent({children}) {

    return(
    <DialogContent className="!px-8 mtl:w-[600px]">
        <div className="space-y-12">
          {children}
        </div>
    </DialogContent>
    );

}