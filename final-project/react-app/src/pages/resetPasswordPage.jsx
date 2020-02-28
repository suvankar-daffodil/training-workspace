import React from "react";

import WelcomeComponent from "../components/welcomeComponent";
import ResetPassword from "../components/resetPasswordFormComponent";

const ResetPasswordPage = props => {
  return (
    <div className="container">
      <div className="content">
        <WelcomeComponent />
        <ResetPassword />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
