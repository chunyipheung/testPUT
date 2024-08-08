// react
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

// structure components
import LoginPagesTemplate from '../../../components/loginpages-components/loginprocess-components/LoginPagesTemplate';
import Box from '../../../components/loginpages-components/loginprocess-components/Box';
import BoxContainer from '../../../components/loginpages-components/loginprocess-components/BoxContainer';
import TitleDescription from '../../../components/loginpages-components/loginprocess-components/TitleDescription';
import LeftArrow from '../../../components/loginpages-components/loginprocess-components/LeftArrow';
import RedAlert from "../../../components/public-components/alerts/RedAlert";

// form components
import CustomInput from '../../../components/public-components/forms/CustomInput';
import LoginForm from '../../../components/public-components/forms/LoginForm';
import CTAButton from '../../../components/loginpages-components/loginprocess-components/CTAButton';

// backend
import { getAPI,postAPI }  from '../../../backend/api';
import { UFKey , ruler , playerAns } from '../../../backend/UserAuthicator';

const schema = z
  .object({
    idNumber: z.string().min(1, { message: "必須填寫此項" }),
    fullName: z.string().min(1, { message: "必須填寫此項" }),
  });

export default function ForgotLoginEmailStartPage() {
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
          idNumber: '',
          fullName: '',
        }
      });

    /** function **/  
    const validateOnBlur = async (field) => {
        await trigger(field);
    };

    const onSubmit = async(data) => {
        setShowAlert(false); 
        const res = await getAPI(`http://61.244.92.135/php/auth.php?auth_type=login_forgot_auth&custname=${data.fullName}&hkid=${data.idNumber}`);
        if(res.success){
            if(res.email_contact === ""){
                // send email
                const data_email = {emailtype:'login_forgot_email',clientname: res.custname,sendToEmail: res.email_login, hkid: res.hkid, email_login: res.email_login, keypass: UFKey, a: ruler, b: playerAns };
                const res_sendEmail = await postAPI("http://61.244.92.135/php/email.php", data_email);

                if(res_sendEmail.success){
                    // location params setter
                    const params = { sendToEmail: data_email.sendToEmail, canLeftArrow: true};
                    navigate('/forgot-login-email/complete', { state: { params } });
                }
            }else{
                // location params setter
                const params = { clientname: data.fullName, hkid: data.idNumber, email_contact: res.email_contact,  email_login: res.email_login };
                navigate('/forgot-login-email/select-channel', { state: { params } });
            }
        }else{ 
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
                        title="忘記登入電郵" 
                        description="請輸入以下資料，我們會立即把您的登入電郵發送給您。" />

                    {showAlert && <RedAlert>您的<u><b>身份證號碼/護照號碼</b></u>或<u><b>英文全名</b></u>未能在資料庫中找到，請重新輸入。</RedAlert>}

                    <LoginForm onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="idNumber"
                            control={control}
                            rules={{ onBlur: () => validateOnBlur("idNumber") }}
                            render={({ field }) => (
                            <CustomInput 
                                {...field} 
                                name="idNumber"
                                type="text"
                                autoComplete="on"
                                label="身份證號碼/護照號碼"
                                errorsRequirement={errors.idNumber}
                                maxLength={30}
                            />
                        )}
                        />
                        <Controller
                            name="fullName"
                            control={control}
                            rules={{ onBlur: () => validateOnBlur("fullName") }}
                            render={({ field }) => (
                            <CustomInput
                                {...field} 
                                name="fullName"
                                type="text"
                                autoComplete="name"
                                label="英文全名，例如CHAN TAI MAN"
                                moreClassName="uppercase"
                                errorsRequirement={errors.fullName}
                                maxLength={30}
                            />
                        )}
                        />
                        <CTAButton disabled={!isValid}>下一步</CTAButton>
                    </LoginForm>

                </Box>
            </BoxContainer>

        </LoginPagesTemplate>
    </>
    )
}
