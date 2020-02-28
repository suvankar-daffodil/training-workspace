import React from "react";
import "./App.css";
import SignupForm from "./Components/SignupFormComponent/signupFormComponent";
import LoginForm from "./Components/LoginFormComponent/loginFormComponent";

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="parent">
        <Switch>
          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
