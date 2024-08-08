// react
import React from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { useState } from "react";

const OtpComponent = React.forwardRef(({
    ...props 
}, ref) => {

    const [otp, setOtp] = useState('');

    const handleChange = (value) => {
        setOtp(value);
      };

    return(

    <>
        <div className="flex justify-center pb-2 ">
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                renderInput={(props) => <input {...props} />}                            
                containerStyle={`m-auto`}
                inputStyle={`!w-[2em] text-3xl px-3 py-4 mx-2 rounded-lg 
                    border-0 text-gray-900
                    shadow-sm ring-1 ring-inset ring-gray-300 
                    focus:ring-2 focus:ring-inset focus:ring-violet-700 
                    sm:leading-6
                    `}
                {...props}
            />
        </div>
    </>

    );

})

export default OtpComponent;