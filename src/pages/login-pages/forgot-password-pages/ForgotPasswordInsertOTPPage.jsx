// react
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useLocation,useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// components
import LoginPagesTemplate from '../../../components/loginpages-components/loginprocess-components/LoginPagesTemplate';
import Box from '../../../components/loginpages-components/loginprocess-components/Box';
import BoxContainer from '../../../components/loginpages-components/loginprocess-components/BoxContainer';
import TitleDescription from '../../../components/loginpages-components/loginprocess-components/TitleDescription';
import CTAButton from '../../../components/loginpages-components/loginprocess-components/CTAButton';
import LeftArrow from '../../../components/loginpages-components/loginprocess-components/LeftArrow';
import OtpComponent from '../../../components/loginpages-components/loginprocess-components/OtpComponent';
import LoginForm from "../../../components/public-components/forms/LoginForm";
import RedAlert from "../../../components/public-components/alerts/RedAlert";

// backend
import { postAPI, getAPI, putAPI }  from '../../../backend/api';
import { obfuscateEmail } from '../../../backend/expression';
import { UFKey , ruler , playerAns } from '../../../backend/UserAuthicator';


const schema = z.object({
    oneTimePassword: z
    .string()
    .min(4,"必須填寫此項"),
  });


export default function ForgotPasswordInsertOTPPage() {
    /** define **/
    const navigate = useNavigate();  
    const location = useLocation();

    const { sendToEmail = '', email_contact = '', email_login = '',hkid = ''} = location.state?.params || {};

    const [showAlert, setShowAlert] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isOKToSend, setIsOKToSend] = useState(true);
    const [timer, setTimer] = useState(0);
    
    const {
        control,
        handleSubmit,
        formState: { isValid },
      } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
        oneTimePassword: '',
        }
      });


    /** function **/
    const onSubmit = async(data) => {
        setShowAlert(0);
        setTimeout( async()=>{
            //authicate oneTimePassword
            const data_auth = {type: "login_forgot_auth",authcode: data.oneTimePassword,email_login:email_login, keypass: UFKey, a: ruler};
            const res_auth = await postAPI("http://61.244.92.135/php/auth.php",data_auth);
            if(res_auth.success === "success"){
                // location params setter
                const params = { hkid: hkid, email_login: email_login};
                navigate('/forgot-password/change-password', { state: { params } });
            }else if(res_auth.success === "expiry"){
                setShowAlert(1);
            }else{
                setShowAlert(2);
            }
        },500);
    }

    useEffect(() => {
        let interval;
        if (timer > 0) {
          interval = setInterval(() => {
            setTimer((prev) => prev - 1);
          }, 1000);
        } else if (timer === 0) {
          setIsOKToSend(true);
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [timer]);
    
    const onResend = async() => {
        setShowAlert(0);
        setIsLoading(true);
        if (!isOKToSend) return;
        // update authcode
        const data_authcode = {auth_type:'login_forgot_pw_auth',email_login: email_login, keypass: UFKey, a: ruler};
        const res_updateauthcode = await putAPI("http://61.244.92.135/php/auth.php",data_authcode);
        if(res_updateauthcode.success)
        {
            // get authcode
            const res_getauthcode = await getAPI(`http://61.244.92.135/php/auth.php?auth_type=login_forgot_get_authcode2&email_login=${email_login}`);
            const clientname = res_getauthcode.custname;
            const hkid = res_getauthcode.hkid;
            const authcode = res_getauthcode.authcode2;

            // send email
            var data_email = {emailtype:'login_forgot_pw_auth',clientname: clientname,sendToEmail: sendToEmail, hkid: hkid, authcode: authcode, keypass: UFKey, a: ruler, b: playerAns };
            const res_sendEmail = await postAPI("http://61.244.92.135/php/email.php",data_email);
            
            if(res_sendEmail.success){
                setIsLoading(false);
                setIsOKToSend(false);
                setTimer(60); // Start the 60-second timer
            }
        }
    }

    return (
    <>
        <LoginPagesTemplate>

            <BoxContainer>
                <LeftArrow to="/forgot-password/start" />
                <Box>
                    <TitleDescription 
                        title="忘記密碼" 
                        description={`我們已將驗證碼發送到${obfuscateEmail(sendToEmail)}，請查閲電郵。`}
                         />
                    
        
                    <h1 className='py-5 font-bold text-xl'>請輸入驗證碼</h1>

                    {showAlert === 2 && <RedAlert><u><b>驗證碼</b></u>不正確，請重新輸入</RedAlert>}
                    {showAlert === 1 && <RedAlert><u><b>驗證碼</b></u>已過時，請輸入新的驗證碼</RedAlert>}
                    
                    <LoginForm onSubmit={handleSubmit(onSubmit)}>
                        
                        <Controller
                                name="oneTimePassword"
                                control={control}
                                render={({ field }) => (
                                <OtpComponent 
                                    {...field}
                                />
                            )}
                        />

                    <div className="text-center py-3">
                        <button 
                            type="button" 
                            className={`${ isOKToSend ? "text-violet-700" : "bg-gray-50 text-gray-400" } 
                            mx-auto font-semibold flex items-center justify-center`} 
                            onClick={onResend} 
                            disabled={!isOKToSend}> 
                                {isOKToSend ? 
                                <>重新獲取驗證碼
                                    {isLoading && 
                                    <svg aria-hidden="true" className="ml-2 w-6 h-6 animate-spin fill-violet-700" viewBox="0 0 4335 4335" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentFill" d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"/>
                                    </svg>
                                    }
                                </>
                                 : `${timer}秒後可重新獲取驗證碼`}
                        </button>
                    </div>   

                        <CTAButton disabled={!isValid}>下一步</CTAButton>
                    </LoginForm>
                    
                </Box>
            </BoxContainer>

        </LoginPagesTemplate>
    </>
    )
}