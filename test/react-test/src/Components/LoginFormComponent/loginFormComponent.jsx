import React from "react";

import "./loginFormComponentStyle.css";

class LoginFormComponent extends React.Component {
  state = {};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  makeApiCall = event => {
    event.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("DeviceId", "TestCompressUserDevice");
    myHeaders.append("OperatingSystem", "Android");
    myHeaders.append("OperatingSystemVersion", "v-3.2");
    myHeaders.append("DeviceName", "Samsung");
    myHeaders.append("protocol", "ipsec");
    myHeaders.append("ApiVersion", "v2");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("extref", "TestCompress");

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };

    fetch("https://fsvpn.whitelabel.com.br/api/user/login", requestOptions)
      .then(response => response.text())
      .then(result => alert(result))
      .catch(error => alert(error));
  };
  render() {
    return (
      <form onSubmit={this.makeApiCall}>
        <div className="container">
          <h1>Login</h1>
          <p>Please fill in this form to login.</p>
          <hr />
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={this.handleChange}
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={this.handleChange}
          />
          <div className="clearfix">
            <button type="submit" className="signupbtn">
              Login
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginFormComponent;
