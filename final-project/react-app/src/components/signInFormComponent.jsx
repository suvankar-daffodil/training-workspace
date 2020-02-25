import React from "react";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="content_rgt">
        <div className="login_sec">
          <h1>Log In</h1>
          <ul>
            <li>
              <span>Email-ID</span>
              <input type="text" placeholder="Enter your email" />
            </li>
            <li>
              <span>Password</span>
              <input type="text" placeholder="Enter your password" />
            </li>
            <li>
              <input type="checkbox" />
              Remember Me
            </li>
            <li>
              <input type="submit" value="Log In" />
              <a href="">Forgot Password</a>
            </li>
          </ul>
          <div className="addtnal_acnt">
            I do not have any account yet.<a href="/register">Create My Account Now !</a>
          </div>
        </div>
      </div>
    );
  }
}
