export default function TitleDescription({ title, description }) {

    return(
    <div className="pb-11">
        <h1 className="text-3xl pb-2 font-bold leading-9 tracking-tight text-gray-900">
        {title}</h1>
        <p className="text-sm">{description}</p>
    </div>
    );

}