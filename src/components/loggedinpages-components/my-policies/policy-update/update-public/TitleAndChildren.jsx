import TitleForPopup from "./TitleForPopup";

export default function TitleAndChildren({ title, children }) {
    return(
    <div className="space-y-3">
        <TitleForPopup title={title} />
        {children}
    </div>
    );
}