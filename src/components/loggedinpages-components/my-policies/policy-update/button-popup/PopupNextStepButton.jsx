export default function PopupNextStepButton({wording, ...props}) {

    return(
    <button className="accountApplicationButton w-full" {...props}>
        {wording}
    </button>
    );

}