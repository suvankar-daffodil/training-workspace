import React from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "../components/welcome-box";
import SignIn from "../components/form-components/signin-form";
import Register from "../components/form-components/register-form";
import ResetPassword from "../components/form-components/password-reset-form";

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
