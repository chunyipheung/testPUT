import { Link } from "react-router-dom";

export default function ForgotEmailPasswordHint({ needPassword = true }) {
  return (
    <div className="text-base">
      忘記
        <Link to="/forgot-login-email/start" className="font-semibold text-violet-700 hover:text-violet-700">
        登入電郵
        </Link>
        {needPassword && (
        <>
          {" "}/{" "}
          <Link to="/forgot-password/start" className="font-semibold text-violet-700 hover:text-violet-700">
            密碼
          </Link>
        </>
      )}
        ？
    </div>
  );
}