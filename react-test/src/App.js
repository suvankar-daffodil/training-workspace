import React from "react";
import "./App.css";
import SignupForm from "./Components/SignupFormComponent/signupFormComponent";
// import LoginForm from "./Components/LoginFormComponent/loginFormComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="parent">
        <SignupForm />
      </div>
    );
  }
}

export default App;
