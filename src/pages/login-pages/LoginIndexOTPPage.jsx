// react
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

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
import RedAlert from "../../components/public-components/alerts/RedAlert";
import CTAButton from '../../components/loginpages-components/loginprocess-components/CTAButton';

// backend
import { postAPI, putAPI }  from '../../backend/api';
import { UFKey , ruler , playerAns } from '../../backend/UserAuthicator';

const schema = z
  .object({
    email: z.string().min(1, { message: "必須填寫此項" }).email("請填寫正確電郵格式，例如abc@gmail.com"),
    rememberMe: z.boolean(),
  });


export default function LoginIndexOTPPage() {
  /** define **/
  const navigate = useNavigate();

  const unionfaithAccount = localStorage.getItem('unionfaithAccount') || '';

  const [showAlert, setShowAlert] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: unionfaithAccount,
      rememberMe: true,
    }
  });


  /** function **/
  const validateOnBlur = async (field) => {
    await trigger(field);
  };

  const onSubmit = async (data) => {
    setShowAlert(false); 

    const { email, rememberMe } = data;
    
    try {
      const updateResponse = await updateAuthCode(email);

      if(updateResponse.success){
        const userInfo = await getUserInfo(email);

        await sendAuthEmail(email, userInfo);
        await handleRememberMe(email, rememberMe);
    
        navigateToOTPPage(email, userInfo);
      }
  
    } catch (error) {
      showAlertMessage();
    }
  };
  
  const updateAuthCode = async (email) => {
    const data = { auth_type: 'login_auth', email_login: email, keypass: UFKey, a: ruler, b: playerAns };
    return await putAPI("http://61.244.92.135/php/auth.php", data);
  };
  
  const getUserInfo = async (email) => {
    const data = { type: 'get_custInfo', email_login: email, keypass: UFKey, a: ruler, b: playerAns };
    const Response = await postAPI('http://61.244.92.135/php/auth.php', data);
    const { AUTHCODE1 , CUSTNAME, HKID } = Response;
    return {
      authcode: AUTHCODE1,
      clientname: CUSTNAME,
      hkid: HKID,
    };
  };
  
  const sendAuthEmail = async (email, userInfo) => {
    const { clientname, hkid, authcode } = userInfo;

    const data = { emailtype: 'login_auth', clientname: clientname, sendToEmail: email, hkid: hkid, authcode: authcode, keypass: UFKey, a: ruler, b: playerAns };
    await postAPI('http://61.244.92.135/php/email.php', data);
  };
  
  const handleRememberMe = async (email, rememberMe) => {
    const data = { auth_type: 'remember_login', email_login: email, rememberMe, keypass: UFKey, a: ruler, b: playerAns };   
    await putAPI("http://61.244.92.135/php/auth.php", data);
  
    localStorage.setItem('unionfaithAccount', rememberMe ? email : '');
    localStorage.setItem('unionfaithRememberMe', rememberMe);
  };
  
  const navigateToOTPPage = (email, userInfo) => {
    const { clientname, hkid } = userInfo;
    const params = { sendToEmail: email, custname: clientname, hkid: hkid };

    navigate('/login-insert-otp', { state: { params } });
  };


  const showAlertMessage = () => {
    setTimeout(() => 
      setShowAlert(true), 500
    );
  };

  const handleClick = () => {
      setIsChecked(preState => !preState);
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
              >
                電郵登入
              </TabButton>
              <TabButton
                to="/otp-login"
                active={true}
              >
                一次性密碼登入
              </TabButton>
            </>
          } 
        />
      </div>

      <BoxContainer>
        <Box>
          {showAlert && <RedAlert><u><b>登入電郵</b></u>不正確，請重新輸入</RedAlert>}
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
              <ForgotEmailPasswordHint needPassword={false} />

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

              <CTAButton disabled={!isValid}>獲取一次性密碼</CTAButton>
            </LoginForm>
        </Box>
      </BoxContainer>
    </LoginPagesTemplate>
  );
}