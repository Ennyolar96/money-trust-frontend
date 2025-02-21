import DashboardLayout from "@/layout/dashboard";
import OuterPages from "@/layout/outer";
import CorporateBasicInformation from "@/pages/auth/corporate/basic-information";
import CorporateLoginDetails from "@/pages/auth/corporate/login-details";
import OTPVerificationCorporate from "@/pages/auth/corporate/otp-verification";
import ForgetPassword from "@/pages/auth/forget-password";
import BasicInformation from "@/pages/auth/individual/basic-information";
import IndividualComplete from "@/pages/auth/individual/complete";
import LoginDetails from "@/pages/auth/individual/login-details";
import OTPVerificationIndividual from "@/pages/auth/individual/otp-verification";
import OTPVerification from "@/pages/auth/otp-verification";
import SignIn from "@/pages/auth/sign-in";
import Dashboard from "@/pages/dashboard";
import Welcome from "@/pages/welcome";
import { Route, Routes } from "react-router-dom";

export default function ApplicationRoute() {
  return (
    <Routes>
      <Route key="outer_pages" path="/" element={<OuterPages />}>
        <Route path="/" element={<Welcome />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="otp-verification" element={<OTPVerification />} />

        {/* Individual registration */}
        <Route
          path="register/individual/basic-information"
          element={<BasicInformation />}
        />
        <Route
          path="register/individual/login-details"
          element={<LoginDetails />}
        />
        <Route
          path="register/individual/otp-verification"
          element={<OTPVerificationIndividual />}
        />
        <Route
          path="register/individual/registration-successful"
          element={<IndividualComplete />}
        />

        {/* Corporate registration */}
        <Route
          path="register/corporate/basic-information"
          element={<CorporateBasicInformation />}
        />
        <Route
          path="register/corporate/login-details"
          element={<CorporateLoginDetails />}
        />
        <Route
          path="register/corporate/otp-verification"
          element={<OTPVerificationCorporate />}
        />
        <Route
          path="register/corporate/registration-successful"
          element={<IndividualComplete />}
        />
      </Route>

      <Route key="dashboard" path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
