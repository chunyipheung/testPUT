// react
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

// components
import LoginPagesTemplate from '../../../components/loginpages-components/loginprocess-components/LoginPagesTemplate';
import Box from '../../../components/loginpages-components/loginprocess-components/Box';
import BoxContainer from '../../../components/loginpages-components/loginprocess-components/BoxContainer';
import TitleDescription from '../../../components/loginpages-components/loginprocess-components/TitleDescription';
import LeftArrow from '../../../components/loginpages-components/loginprocess-components/LeftArrow';
import RedAlert from "../../../components/public-components/alerts/RedAlert";

// form components
import CustomInput from '../../../components/public-components/forms/CustomInput';
import LoginForm from '../../../components/public-components/forms/LoginForm';
import ForgotEmailPasswordHint from '../../../components/loginpages-components/loginprocess-components/ForgotEmailPasswordHint';
import CTAButton from '../../../components/loginpages-components/loginprocess-components/CTAButton';

// backend
import { getAPI,postAPI,putAPI }  from '../../../backend/api';
import { UFKey , ruler , playerAns } from '../../../backend/UserAuthicator';

const schema = z
  .object({
    email: z.string().min(1, { message: "必須填寫此項" }).email("請填寫正確電郵格式，例如abc@gmail.com"),
  });

export default function ForgotPasswordStartPage() {
    /** define **/
    const navigate = useNavigate();

    const [showAlert, setShowAlert] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        trigger,
      } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          email: '',
        }
    });

    /**  function **/
    const validateOnBlur = async (field) => {
    await trigger(field);
    };

    const onSubmit = async(data) => {
        setShowAlert(false); 
        const url = `http://61.244.92.135/php/auth.php?auth_type=login_forgot_auth2&email_login=${data.email}`;
        const res = await getAPI(url);

        if (res.success) {
            if(res.email_contact === ""){
                // update authcode
                const data_authcode = {auth_type:'login_forgot_pw_auth',email_login: res.email_login, keypass: UFKey, a: ruler};
                const res_updateauthcode = await putAPI("http://61.244.92.135/php/auth.php",data_authcode);
                if(res_updateauthcode.success)
                {
                    // get info
                    const res_getauthcode = await getAPI(`http://61.244.92.135/php/auth.php?auth_type=login_forgot_get_authcode2&email_login=${res.email_login}`);
                    const clientname = res_getauthcode.custname;
                    const hkid = res_getauthcode.hkid;
                    const authcode = res_getauthcode.authcode2;

                    // send email
                    const data_email = {emailtype:'login_forgot_pw_auth',clientname: clientname,sendToEmail: res.email_login, hkid: hkid, authcode: authcode, keypass: UFKey, a: ruler, b: playerAns };
                    const res_sendEmail = await postAPI("http://61.244.92.135/php/email.php",data_email);
                    if(res_sendEmail.success){
                        // location params setter
                        const params = { sendToEmail: data_email.sendToEmail, email_contact: res.email_contact,  email_login: res.email_login, hkid: hkid };
                        navigate('/forgot-password/insert-otp', { state: { params } });
                    }
                }
            }else{
                // location params setter
                const params = { email_contact: res.email_contact,  email_login: res.email_login };
                navigate('/forgot-password/select-channel', { state: { params } });
            }
        } else { 
            setTimeout(()=>{
                setShowAlert(true); 
            },500);
        }
    };

    return (
    <>
        <LoginPagesTemplate>

            <BoxContainer>
                <LeftArrow to="/login"/>
                <Box>
                    <TitleDescription 
                        title="忘記密碼" 
                        description="請輸入以下資料，我們會立即把您的登入電郵發送給您。" />

                    {showAlert && <RedAlert>您的<u><b>登入電郵</b></u>未能在資料庫中找到，請重新輸入。</RedAlert>}

                    <LoginForm onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ onBlur: () => validateOnBlur("email") }}
                            render={({ field }) => (
                                <CustomInput
                                    {...field}  
                                    name="email"
                                    type="text"
                                    autoComplete="email"
                                    label="登入電郵"
                                    errorsRequirement={errors.email}
                                />
                            )}
                        />
                        <ForgotEmailPasswordHint needPassword={false}/>
                        <CTAButton disabled={!isValid}>下一步</CTAButton>
                    </LoginForm> 

                </Box>
            </BoxContainer>

        </LoginPagesTemplate>
    </>
    )
}
