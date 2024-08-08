// react
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// structure components
import LoginPagesTemplate from '../../components/loginpages-components/loginprocess-components/LoginPagesTemplate';
import Tabs from '../../components/loginpages-components/loginprocess-components/Tabs';
import TabButton from '../../components/loginpages-components/loginprocess-components/TabButton';
import BoxContainer from '../../components/loginpages-components/loginprocess-components/BoxContainer';
import Box from '../../components/loginpages-components/loginprocess-components/Box';

// form components
import CustomInput from '../../components/public-components/forms/CustomInput';
import LoginForm from '../../components/public-components/forms/LoginForm';
import RememberMe from '../../components/loginpages-components/loginprocess-components/RememberMe';
import ForgotEmailPasswordHint from '../../components/loginpages-components/loginprocess-components/ForgotEmailPasswordHint';
import CTAButton from '../../components/loginpages-components/loginprocess-components/CTAButton';
import RedAlert from "../../components/public-components/alerts/RedAlert";

// backend
import {putAPI,postAPI}  from '../../backend/api';
import { UFKey , ruler , playerAns } from '../../backend/UserAuthicator';

const schema = z
  .object({
    email: z.string().min(1, { message: "必須填寫此項" }).email("請填寫正確電郵格式，例如abc@gmail.com"),
    password: z.string().min(1, { message: "必須填寫此項" }),
    rememberMe: z.boolean(),
  });


export default function LoginIndexPage() {

  /** define **/
  const navigate = useNavigate();

  const unionfaithRememberMe = localStorage.getItem('unionfaithRememberMe') === 'true';
  const unionfaithAccount = localStorage.getItem('unionfaithAccount') || '';
  const unionfaithPassword = localStorage.getItem('unionfaithPassword') || '';

  const [isChecked, setIsChecked] = useState(unionfaithRememberMe);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: unionfaithAccount,
      password: unionfaithPassword,
      rememberMe: false,
    }
  });

  /** function **/
  useEffect(() => {
    if (sessionStorage.getItem('isLoggedIn')) {
      const params = { custname: sessionStorage.getItem('token_custname'), hkid: sessionStorage.getItem('token_hkid') };
      navigate('/my-account/my-policies', { state: { params } });
    }
  }, [navigate]);

  const validateOnBlur = async (field) => {
    await trigger(field);
  };

  const onSubmit = async (data) => {

    setIsLoading(true);
    setShowAlert(false);
    
    const {email, password} = data;

    try {
      const loginResponse = await login(email, password);

      if (loginResponse.success) {
        await handleRememberMe(data);
        await handleToken(email);
  
        const params = { custname: loginResponse.CUSTNAME, hkid: loginResponse.HKID };
        navigate('/my-account/my-policies', { state: { params } });
      } else {
        showAlertMessage();
      }
    } catch (error) {
      showAlertMessage();
    }
  };
  
  const login = async (email, password) => {
    const data = { type: 'get_custInfo', email_login: email, password: password, keypass: UFKey, a: ruler, b: playerAns };
    return await postAPI('http://61.244.92.135/php/auth.php', data);
  };
  
  const handleRememberMe = async (data) => {
    const { email, password, rememberMe } = data;
    const rememberMeData = { auth_type: 'remember_login', email_login: email, rememberMe: rememberMe, keypass: UFKey, a: ruler, b: playerAns };
    const rememberMeResponse = await putAPI("http://61.244.92.135/php/auth.php", rememberMeData);
  
    if (rememberMeResponse.success) {
      localStorage.setItem('unionfaithAccount', rememberMe ? email : '');
      localStorage.setItem('unionfaithPassword', rememberMe ? password : '');
      localStorage.setItem('unionfaithRememberMe', rememberMe);
    }
  };
  
  const handleToken = async (email) => {
    if (email !== "uf20240719@gmail.com") {
      const updateTokenData = { auth_type: 'update_token', email_login: email, keypass: UFKey, a: ruler, b: playerAns };
      const updateTokenResponse = await putAPI("http://61.244.92.135/php/auth.php", updateTokenData);
  
      if (updateTokenResponse.success) {
        const getTokenData = { type: 'get_token', email_login: email, keypass: UFKey, a: ruler, b: playerAns };
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
  
  const showAlertMessage = () => {
    setTimeout(() => {
      setShowAlert(true);
      setIsLoading(false);
    }, 500);
  };

  const handleClick = () => {
    setIsChecked(prevState => {
      const newValue = !prevState;
      localStorage.setItem('unionfaithRememberMe', newValue);
      return newValue;
    });
  };

  return (
    <LoginPagesTemplate>
      <div>
        <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          登入賬戶
        </h2>
      </div>

      <div className='px-4'>
        <Tabs 
          buttons={
            <>
              <TabButton
                to="/login"
                active={true}
              >
                電郵登入
              </TabButton>
              <TabButton
                to="/otp-login"
              >
                一次性密碼登入
              </TabButton>
            </>
          } 
        />
      </div>

      <BoxContainer>
        <Box>
          {showAlert && <RedAlert><u><b>登入電郵/密碼</b></u>不正確，請重新輸入</RedAlert>}
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
                    autoComplete="on"
                    label="登入電郵"
                    errorsRequirement={errors.email}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{ onBlur: () => validateOnBlur("password") }}
                render={({ field }) => (
                  <CustomInput
                    {...field} 
                    name="password"
                    type="password"
                    autoComplete="password"
                    label="密碼"
                    needIcon={true}
                    errorsRequirement={errors.password}
                  />
                )}
              />
              <ForgotEmailPasswordHint />

              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => (
                  <RememberMe
                    checked={isChecked}
                    onClick={handleClick}
                    {...field}
                  />
                )}
              />
                
                <CTAButton disabled={!isValid} isLoading={isLoading}>
                            {!isLoading ? "登入" : 
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
  );
}
