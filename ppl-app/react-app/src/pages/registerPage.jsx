import React from "react";

import WelcomeComponent from "../components/welcomeComponent";
import RegisterForm from "../components/registerFormComponent";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="content">
        <WelcomeComponent />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
