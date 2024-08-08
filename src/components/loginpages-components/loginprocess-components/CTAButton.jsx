export default function CTAButton({children, disabled=false, isLoading=false, ...props}) {
    return(
        <div>

            <button
                type="submit"
                className="flex items-center
                mt-12 flex w-full justify-center 
                rounded-full px-3 py-3 
                text-base font-semibold leading-6 text-white shadow-sm 
                hover:bg-purple-500 
                focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-violet-700
                disabled:bg-gray-200
                bg-violet-700"
                disabled={disabled}
                {...props}
            >
                {children}
            </button>

        </div>
    );

}