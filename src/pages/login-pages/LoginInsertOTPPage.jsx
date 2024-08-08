// react
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useLocation,useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// components
import LoginPagesTemplate from '../../components/loginpages-components/loginprocess-components/LoginPagesTemplate';
import Box from '../../components/loginpages-components/loginprocess-components/Box';
import BoxContainer from '../../components/loginpages-components/loginprocess-components/BoxContainer';
import TitleDescription from '../../components/loginpages-components/loginprocess-components/TitleDescription';
import LeftArrow from '../../components/loginpages-components/loginprocess-components/LeftArrow';
import CTAButton from '../../components/loginpages-components/loginprocess-components/CTAButton';
import OtpComponent from '../../components/loginpages-components/loginprocess-components/OtpComponent';
import LoginForm from "../../components/public-components/forms/LoginForm";
import RedAlert from "../../components/public-components/alerts/RedAlert"

// backend
import { postAPI, putAPI }  from '../../backend/api';
import { obfuscateEmail } from '../../backend/expression'; 
import { UFKey , ruler , playerAns } from '../../backend/UserAuthicator';
const schema = z.object({
    oneTimePassword: z
    .string()
    .min(4,"必須填寫此項"),
  });

export default function LoginInsertOTPPage() {
    /** define **/
    const location = useLocation();
    const navigate = useNavigate();  

    const { sendToEmail = '', custname = '', hkid = '' } = location.state?.params || {};

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

    const [showAlert, setShowAlert] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isOKToSend, setIsOKToSend] = useState(true);
    const [timer, setTimer] = useState(0);
    const [isButtonLoading, setButtonIsLoading] = useState(false);

    /** function **/  
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

    const onSubmit = async(data) => {
        setShowAlert(0);
        setButtonIsLoading(true);

        const { oneTimePassword } = data;
        try{
            setTimeout( async()=>{
                const AuthicateResponse = await handleOTPAuthication(oneTimePassword);
                if(AuthicateResponse.success === "success"){
                    await handleToken();

                    const params = { custname: custname, hkid: hkid};
                    navigate('/my-account/my-policies', { state: { params } });
                }else if(AuthicateResponse.success === "expiry"){
                    setShowAlert(1);
                }else{
                    setShowAlert(2);
                }
                setButtonIsLoading(false);
            },500);
        }catch(error){}
    }

    const handleToken = async () => {
        if (sendToEmail !== "uf20240719@gmail.com") {
            const updateTokenData = { auth_type: 'update_token', email_login: sendToEmail, keypass: UFKey, a: ruler, b: playerAns };
            const updateTokenResponse = await putAPI("http://61.244.92.135/php/auth.php", updateTokenData);
            if (updateTokenResponse.success) {
                const getTokenData = { type: 'get_token', email_login: sendToEmail, keypass: UFKey, a: ruler, b: playerAns };
                const getTokenResponse = await postAPI('http://61.244.92.135/php/auth.php', getTokenData);
        
                if (getTokenResponse.success) {
                    setSessionStorage(getTokenResponse);
                }
            }
        } else {
          setSessionStorage({ token: "uf2", custname: "Chou Shih Ming", hkid: "E705962(4)" });
        }
    };

    const setSessionStorage = (data) => {
        const { token, custname, hkid } = data;
        sessionStorage.setItem('token_token', token);
        sessionStorage.setItem('token_custname', custname);
        sessionStorage.setItem('token_hkid', hkid);
    };

    const handleOTPAuthication = async(otp) => {
        const data = {type: "login_auth",authcode: otp, email_login:sendToEmail, keypass: UFKey, a: ruler};
        return await postAPI("http://61.244.92.135/php/auth.php", data);
    }

    const onResend = async() =>{
        if (!isOKToSend) return;

        setShowAlert(0);
        setIsLoading(true);
        try{
            const updateAuthCodeResponse = await updateAuthCode();

            if(updateAuthCodeResponse.success){
                const userInfo = await getUserInfo();

                const resendEmailResponse = await resendEmail(userInfo);

                if(resendEmailResponse.success){
                    setIsLoading(false);
                    setIsOKToSend(false);
                    setTimer(60); // Start the 60-second timer
                }
            }   
        }catch(error){}

    }

    const updateAuthCode = async() => {
        const data = {auth_type:'login_auth',email_login: sendToEmail, keypass: UFKey, a: ruler, b: playerAns };
        return await putAPI('http://61.244.92.135/php/auth.php', data);
    }

    const getUserInfo = async () => {
        const data = { type: 'get_custInfo', email_login: sendToEmail, keypass: UFKey, a: ruler, b: playerAns };
        const Response = await postAPI('http://61.244.92.135/php/auth.php', data);

        const { AUTHCODE1 , CUSTNAME } = Response;
    
        return {
            authcode: AUTHCODE1,
            clientname: CUSTNAME,
        };
    };

    const resendEmail = async (userInfo) => {
        const { clientname, authcode } = userInfo;

        const data = { emailtype: 'login_auth', clientname:clientname, sendToEmail: sendToEmail, hkid: hkid, authcode: authcode, keypass: UFKey, a: ruler, b: playerAns };
        return await postAPI('http://61.244.92.135/php/email.php', data);
    }

    return (
    <>
        <LoginPagesTemplate>

            <BoxContainer>
                <LeftArrow to="/otp-login" />
                <Box>

                    <TitleDescription title="請輸入一次性密碼" description={`我們剛發送一次性密碼到電郵 ${obfuscateEmail(sendToEmail)}。每個密碼5分鐘內有效。`} />
                    
                    {showAlert === 2 && <RedAlert>一次性密碼不正確，請重新輸入。</RedAlert>}
                    {showAlert === 1 && <RedAlert>一次性密碼已過時，請輸入新的驗證碼。</RedAlert>}

                    

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
                                <>重新獲取一次性密碼
                                    {isLoading && 
                                    <svg aria-hidden="true" className="ml-2 w-6 h-6 animate-spin fill-violet-700" viewBox="0 0 4335 4335" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentFill" d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"/>
                                    </svg>
                                    }
                                </>
                                 : `${timer}秒後可重新獲取一次性密碼`}
                        </button>
                    </div>   

                    <CTAButton disabled={!isValid} isLoading={isButtonLoading}>
                            {!isLoading ? "進入我的賬戶" : 
                            <>正在加載
                            <svg aria-hidden="true" className="ml-2 w-6 h-6 animate-spin fill-white" viewBox="0 0 4335 4335" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentFill" d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"/>
                            </svg> 
                            </> }
                    </CTAButton>
                    </LoginForm>

                </Box>
            </BoxContainer>

        </LoginPagesTemplate>
    </>
    )
}
