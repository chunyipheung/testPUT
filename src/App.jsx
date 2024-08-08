import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterData from "./RouterData";

// Homepage
import Homepage from "./pages/main-pages/HomePage";

// Main Pages
import ClaimPage from "./pages/main-pages/ClaimPage";
import DisountPage from "./pages/main-pages/DiscountPage";
import HelpPage from "./pages/main-pages/HelpPage";

// Login Pages
import LoginIndexOTPPage from "./pages/login-pages/LoginIndexOTPPage";
import LoginIndexPage from "./pages/login-pages/LoginIndexPage";
import LoginInsertOTPPage from "./pages/login-pages/LoginInsertOTPPage";
import ForgotLoginEmailCompletePage from "./pages/login-pages/forgot-loginemail-pages/ForgotLoginEmailCompletePage";
import ForgotLoginEmailSelectChannelPage from "./pages/login-pages/forgot-loginemail-pages/ForgotLoginEmailSelectChannelPage";
import ForgotLoginEmailStartPage from "./pages/login-pages/forgot-loginemail-pages/ForgotLoginEmailStartPage";
import ForgotPasswordChangePasswordPage from "./pages/login-pages/forgot-password-pages/ForgotPasswordChangePasswordPage";
import ForgotPasswordCompletePage from "./pages/login-pages/forgot-password-pages/ForgotPasswordCompletePage";
import ForgotPasswordInsertOTPPage from "./pages/login-pages/forgot-password-pages/ForgotPasswordInsertOTPPage";
import ForgotPasswordSelectChannelPage from "./pages/login-pages/forgot-password-pages/ForgotPasswordSelectChannelPage";
import ForgotPasswordStartPage from "./pages/login-pages/forgot-password-pages/ForgotPasswordStartPage";

// Logged In Pages
import AccountClaimsPage from "./pages/loggedin-pages/account-claims-pages/AccountClaimsPage";
import AccountHelpPage from "./pages/loggedin-pages/account-help-pages/AccountHelpPage";
import MyInfoPage from "./pages/loggedin-pages/my-info-pages/MyInfoPage";
import MyPoliciesPage from "./pages/loggedin-pages/my-policies-pages/MyPoliciesPage";
import PolicyDetailsPage from "./pages/loggedin-pages/my-policies-pages/PolicyDetailsPage";

// Other Pages
import WrongUrlPage from "./pages/main-pages/WrongUrlPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route index element={<Homepage />} />

          {/* Outside Pages */}
          <Route path="/claim" element={<ClaimPage />} />
          <Route path="/discount" element={<DisountPage />} />
          <Route path="/help" element={<HelpPage />} />

          {/* Login Process Pages */}
          <Route path="/login" element={<LoginIndexPage />} />
          <Route path="/otp-login" element={<LoginIndexOTPPage />} />
          <Route path="/login-insert-otp" element={<LoginInsertOTPPage />} />
          <Route
            path="/forgot-login-email/start"
            element={<ForgotLoginEmailStartPage />}
          />
          <Route
            path="/forgot-login-email/select-channel"
            element={<ForgotLoginEmailSelectChannelPage />}
          />
          <Route
            path="/forgot-login-email/complete"
            element={<ForgotLoginEmailCompletePage />}
          />
          <Route
            path="/forgot-password/start"
            element={<ForgotPasswordStartPage />}
          />
          <Route
            path="/forgot-password/select-channel"
            element={<ForgotPasswordSelectChannelPage />}
          />
          <Route
            path="/forgot-password/insert-otp"
            element={<ForgotPasswordInsertOTPPage />}
          />
          <Route
            path="/forgot-password/change-password"
            element={<ForgotPasswordChangePasswordPage />}
          />
          <Route
            path="/forgot-password/complete"
            element={<ForgotPasswordCompletePage />}
          />

          {/* Logged In Pages */}
          <Route path="/my-account/my-policies" element={<MyPoliciesPage />} />
          <Route
            path="/my-account/my-policies/policy-details"
            element={<PolicyDetailsPage />}
          />
          <Route
            path="/my-account/my-policies/:tab"
            element={<PolicyDetailsPage />}
          />
          <Route
            path="/my-account/my-policies/:tab/:topic"
            element={<PolicyDetailsPage />}
          />
          <Route
            path="/my-account/my-policies/:tab/:topic/:step"
            element={<PolicyDetailsPage />}
          />
          <Route path="/my-account/help" element={<AccountHelpPage />} />
          <Route path="/my-account/claims" element={<AccountClaimsPage />} />
          <Route path="/my-account/my-info" element={<MyInfoPage />} />

          {/* Product Pages */}
          {RouterData.map((product, index) => (
            <Route
              key={index}
              path={product.path}
              element={<product.element />}
            />
          ))}

          {/* Other Pages */}
          <Route path="*" element={<WrongUrlPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
