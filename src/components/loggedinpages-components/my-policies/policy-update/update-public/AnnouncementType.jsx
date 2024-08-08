import TitleForPopup from "./TitleForPopup";

export default function AnnouncementType({title, Icon, warnings}) {

return(
    <>
    <TitleForPopup title={title} />

    <ul>
        {warnings.map((warning, index) => (
            <li key={index} className="flex items-center space-y-2">
                <Icon className="h-5 w-5 mr-2"/>
                {warning}
            </li>
        ))}
    </ul>
    </>
);

}