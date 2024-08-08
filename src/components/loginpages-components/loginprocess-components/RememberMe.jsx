// react
import React,{ useState } from "react";

const RememberMe = React.forwardRef(({ ...props }, ref) => {

    return(

        <div className="flex items-center" ref={ref}>
            <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-violet-700 focus:ring-violet-700"
            { ...props }
            />
            <label htmlFor="remember-me" className="ml-3 block text-base leading-6 text-gray-900">
            記住我的登入資料
            </label>
        </div>

    );

})

export default RememberMe;