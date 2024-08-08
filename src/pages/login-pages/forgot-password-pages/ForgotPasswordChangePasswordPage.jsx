// react
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useLocation,useNavigate } from 'react-router-dom';

// components
import LoginPagesTemplate from '../../../components/loginpages-components/loginprocess-components/LoginPagesTemplate';
import Box from '../../../components/loginpages-components/loginprocess-components/Box';
import BoxContainer from '../../../components/loginpages-components/loginprocess-components/BoxContainer';
import TitleDescription from '../../../components/loginpages-components/loginprocess-components/TitleDescription';
import LeftArrow from '../../../components/loginpages-components/loginprocess-components/LeftArrow';

// form components
import CustomInput from '../../../components/public-components/forms/CustomInput';
import LoginForm from '../../../components/public-components/forms/LoginForm';
import CTAButton from '../../../components/loginpages-components/loginprocess-components/CTAButton';
import PasswordHints from '../../../components/loginpages-components/loginprocess-components/PasswordHints';

// backend
import { putAPI }  from '../../../backend/api';
import { UFKey , ruler , playerAns } from '../../../backend/UserAuthicator';

const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/;

const schema = z
  .object({
    newPassword: z
    .string()
    .min(PASSWORD_MIN_LENGTH, '密碼長度最少8位數')
    .min(1, "必須填寫此項")
    .regex(PASSWORD_REGEX, '必須同時包含大小楷英文、數字、符號(!@#$%^&*(),.?":{}|<>)' ),
    confirmPassword: z.string().min(1, "必須填寫此項"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "輸入密碼不一致",
    path: ["confirmPassword"],
  });

export default function ForgotPasswordChangePasswordPage() {
  /** define **/
  const location = useLocation();
  const navigate = useNavigate();  

  const { hkid = '', email_login = ''} = location.state?.params || {};

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    trigger,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    }
  });


  /** function **/
  const validateOnBlur = async (field) => {
    await trigger(field);
  };

  const onSubmit = async(data) => {
    const data_updatePW = {auth_type:'update_password', email_login: email_login ,hkid: hkid, password: data.confirmPassword,keypass: UFKey, a: ruler};
    const res_updatePW = await putAPI("http://61.244.92.135/php/auth.php",data_updatePW);
    if(res_updatePW.success){
      navigate('/forgot-password/complete');
    }
  };

  const hasMinLength = (password) => {
    return password.length >= PASSWORD_MIN_LENGTH;
  };

  const hasAllRequirement = (password) => {
    return PASSWORD_REGEX.test(password);
  };


  const newPassword = watch('newPassword'); // code position fixed

  return (
    <LoginPagesTemplate>
      <BoxContainer>
        <LeftArrow to="/forgot-password/insert-otp" />
        <Box>
          <TitleDescription title="忘記密碼" description="請輸入新密碼" />

          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="newPassword"
              control={control}
              rules={{ onBlur: () => validateOnBlur("newPassword") }}
              render={({ field }) => (
                  <CustomInput
                    {...field} 
                    name="newPassword"
                    type="password"
                    autoComplete="off"
                    label="新密碼"
                    needIcon={true}
                    maxLength={20}
              />
              )}
            />
          <PasswordHints
            eightDigitChecked={hasMinLength(newPassword)}
            containRequirementChecked={hasAllRequirement(newPassword)}
          />

          {/* here is the place that I inserted the checkbox component */}

            <Controller
              name="confirmPassword"
              control={control}
              rules={{ onBlur: () => validateOnBlur("confirmPassword") }}
              render={({ field }) => (
                <CustomInput
                  {...field} 
                  name="confirmPassword"
                  type="password"
                  autoComplete="off"
                  label="確認新密碼"
                  needIcon={true}
                  errorsRequirement={errors.confirmPassword}
               />
              )}
            />
            <CTAButton disabled={!isValid}>確認</CTAButton>
          </LoginForm>
          
        </Box>
      </BoxContainer>
    </LoginPagesTemplate>
  );
}