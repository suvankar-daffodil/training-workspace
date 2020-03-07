import React from "react";
import "./loginFormComponentStyle.css";

class LoginFormComponent extends React.Component {
  makeApiCall() {
    alert("Submitted");
  }
  render() {
    return (
      <form onSubmit={this.makeApiCall}>
        <div class="container">
          <h1>Login</h1>
          <p>Please fill in this form to login.</p>
          <hr />

          <label>
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <div class="clearfix">
            <button type="submit" class="signupbtn">
              Login
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginFormComponent;
