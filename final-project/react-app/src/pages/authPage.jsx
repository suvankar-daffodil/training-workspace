import React from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "../components/welcomeComponent";
import SignIn from "../components/signInFormComponent";
import Register from "../components/registerFormComponent";
import ResetPassword from "../components/resetPasswordFormComponent";

const AuthPage = props => {
  return (
    <div className="container">
      <div className="content">
        <Welcome />
        <Switch>
          <Route path="/auth/signin" render={() => <SignIn {...props} />} />
          <Route path="/auth/signup" render={() => <Register {...props} />} />
          <Route path="/auth/password-reset" component={ResetPassword} />
        </Switch>
      </div>
    </div>
  );
};

export default AuthPage;
