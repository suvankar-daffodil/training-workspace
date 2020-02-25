import React from "react";

import MainComponent from "../components/mainComponent";
import WelcomeComponent from "../components/welcomeComponent";
import RegisterForm from "../components/registerFormComponent";

const RegisterPage = () => {
  return (
    <MainComponent>
      <WelcomeComponent />
      <RegisterForm />
    </MainComponent>
  );
};

export default RegisterPage;
