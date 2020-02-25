import React from "react";

import MainComponent from "../components/mainComponent";
import WelcomeComponent from "../components/welcomeComponent";
import SignIn from "../components/signInFormComponent";

const LoginPage = () => {
  return (
    <MainComponent>
      <WelcomeComponent />
      <SignIn />
    </MainComponent>
  );
};

export default LoginPage;
