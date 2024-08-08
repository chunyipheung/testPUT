// react 
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// components
import LoginPagesTemplate from '../../../components/loginpages-components/loginprocess-components/LoginPagesTemplate';
import Box from '../../../components/loginpages-components/loginprocess-components/Box';
import BoxContainer from '../../../components/loginpages-components/loginprocess-components/BoxContainer';
import TitleDescription from '../../../components/loginpages-components/loginprocess-components/TitleDescription';
import CTAButton from '../../../components/loginpages-components/loginprocess-components/CTAButton';
import LeftArrow from '../../../components/loginpages-components/loginprocess-components/LeftArrow';
import RadioButton from '../../../components/loginpages-components/loginprocess-components/RadioButton';
import LoginForm from '../../../components/public-components/forms/LoginForm';

// backend
import { postAPI }  from '../../../backend/api';
import { emailChoicesData } from '../../../backend/emailChoicesData';
import { UFKey , ruler , playerAns } from '../../../backend/UserAuthicator';
// zod validation
const schema = z.object({
    theRadio:z.string().min(1, ''),
});

export default function ForgotLoginEmailSelectChannelPage() {
    /** define **/
    const location = useLocation();
    const navigate = useNavigate();  

    const { clientname = '', hkid = '', email_contact = '', email_login = '' } = location.state?.params || {};

    const [settings, setSettings] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            theRadio: ''
        },
        mode: 'onChange'
    });

    /** function **/
    useEffect(() => {
        const fetchData = async () => {
            const data = await emailChoicesData(clientname,hkid,'');
            setSettings(data);
        };

        fetchData();
        }, []); 

    const onSubmit = async(data) => {
        setIsLoading(true);
        var data_email = {emailtype:'login_forgot_email',clientname: clientname,sendToEmail: email_login, hkid: hkid, email_login: email_login, keypass: UFKey, a: ruler, b: playerAns };
        if(data.theRadio === '通訊電郵'){
            data_email = {emailtype:'login_forgot_email',clientname: clientname,sendToEmail: email_contact, hkid: hkid, email_login: email_login, keypass: UFKey, a: ruler, b: playerAns };
        }
        const res_sendEmail = await postAPI("http://61.244.92.135/php/email.php", data_email);
        if(res_sendEmail.success){
             // location params setter
             const params = { sendToEmail: data_email.sendToEmail, canLeftArrow: true};
             navigate('/forgot-login-email/complete', { state: { params } });
        }
    }

    return (
    <>
        <LoginPagesTemplate>

            <BoxContainer>
                <LeftArrow to="/forgot-login-email/start" />
                <Box>
                    <TitleDescription 
                        title="忘記登入電郵" 
                        description= "您登記的聯絡資料如下，請選擇您想收取的方式"
                    />
                
                    <LoginForm onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name='theRadio'
                            control={control}
                            render={({ field }) => (
                            <RadioButton 
                                {...field}
                                settings={settings} 
                                value={field.value}
                            />
                        )}
                        />
                        
                    <CTAButton disabled={!isValid} isLoading={isLoading}>
                        {!isLoading ? "發送" : 
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