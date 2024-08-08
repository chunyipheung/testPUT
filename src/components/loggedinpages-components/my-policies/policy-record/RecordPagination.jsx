import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function RecordPagination() {

    function handleClick() {
        console.log("arrow clicked");
    }

    return(
        <div className="flex justify-end space-x-4 p-4 text-right">
            <p>現在是第1-8條，共20條</p>
            <div className="flex gap-3">
                <ChevronLeftIcon className="h-5 w-5 cursor-pointer" onClick={handleClick}/>
                <ChevronRightIcon className="h-5 w-5 cursor-pointer" onClick={handleClick}/>
            </div>
        </div>
    );

}