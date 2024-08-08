// react
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

// components
import CustomInput from "./CustomInput";
import CTAButton from "../../loginpages-components/loginprocess-components/CTAButton";
import RememberMe from "../../loginpages-components/loginprocess-components/RememberMe";
import ForgotEmailPasswordHint from "../../loginpages-components/loginprocess-components/ForgotEmailPasswordHint";

const schema = z
  .object({
    email: z.string().min(1, { message: "必須填寫此項" }).email("請填寫正確電郵格式，例如abc@xmail.com"),
    password: z.string().min(1, { message: "必須填寫此項" }),
    // idNumber: z.string().min(1, { message: "必須填寫此項" }),
    // fullName: z.string().min(1, { message: "必須填寫此項" }),
    // newPassword: z.string().min(1, { message: "必須填寫此項" }),
    // confirmPassword: z.string().min(1, { message: "必須填寫此項" }),
  });
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "輸入密碼不一致",
  //   path: ["confirmPassword"],
  // });

export default function CustomForm({
  datas,
  needRememberMe = false,
  needEmailPasswordHint = false,
  needPassword = true,
  ctaButtonText,
  toCTAButton,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      idNumber: '',
      fullName: '',
      newPassword: '',
      confirmPassword: '',
    }
  });

  const validateOnBlur = async (field) => {
    await trigger(field);
  };

  const onSubmit = (data) => {
    //console.log(data);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {datas.map((data, index) => (
          <div key={index}>
            <Controller
              name={data.name}
              control={control}
              rules={{ onBlur: () => validateOnBlur(data.name) }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  type={data.type}
                  autoComplete={data.autoComplete}
                  label={data.label}
                  needIcon={data.needIcon}
                  needPasswordHints={data.needPasswordHints}
                  moreClassName={errors[data.name] ? "border-red-500" : ""}
                />
              )}
            />
            {errors[data.name] && (
              <div className="text-red-500">{errors[data.name].message}</div>
            )}
          </div>
        ))}
        {needEmailPasswordHint && <ForgotEmailPasswordHint needPassword={needPassword} />}
        {needRememberMe && <RememberMe />}
        <CTAButton to={toCTAButton} disabled={!isValid}>
          {ctaButtonText}
        </CTAButton>
      </form>
    </>
  );
}

