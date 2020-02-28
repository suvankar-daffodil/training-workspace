import React from "react";

import WelcomeComponent from "../components/welcomeComponent";
import SignIn from "../components/signInFormComponent";

const LoginPage = props => {
  return (
    <div className="container">
      <div className="content">
        <WelcomeComponent />
        <SignIn {...props} />
      </div>
    </div>
  );
};

export default LoginPage;
