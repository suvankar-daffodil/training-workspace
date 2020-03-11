import React, { useState, useCallback } from "react";

import "./loginFormComponentStyle.css";

const LoginForm = props => {
  const [formData, setFormData] = useState({});

  const handleChange = useCallback(
    event => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    },
    [formData]
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      makeApiCall(formData);
    },
    [formData]
  );

  return (
    <form onSubmit={handleSubmit}>
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
          onChange={handleChange}
        />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
        />
        <div className="clearfix">
          <button type="submit" className="signupbtn">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

const makeApiCall = formData => {
  // let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

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
    // mode: "no-cors",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  fetch("https://fsvpn.whitelabel.com.br/api/user/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
};

export default LoginForm;
