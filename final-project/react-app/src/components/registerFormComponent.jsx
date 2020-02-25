import React from "react";

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div class="content_rgt">
        <div class="register_sec">
          <h1>Create An Account</h1>
          <ul>
            <li>
              <span>Username</span>
              <input type="text" placeholder="Enter your username" />
            </li>
            <li>
              <span>Password</span>
              <input type="text" placeholder="Enter your password" />
            </li>
            <li>
              <span>Email</span>
              <input type="text" placeholder="Enter your email" />
            </li>
            <li>
              <span>First Name</span>
              <input type="text" placeholder="Enter your first name" />
            </li>
            <li>
              <span>Last Name</span>
              <input type="text" placeholder="Enter your last name" />
            </li>
            <li>
              <input type="checkbox" />I agree to Term &amp; Conditions
            </li>
            <li>
              <input type="submit" value="Register" />
            </li>
          </ul>
          <div class="addtnal_acnt">
            I already have an account.<a href="/login">Login My Account !</a>
          </div>
        </div>
      </div>
    );
  }
}
