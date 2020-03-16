import React, { useState, useCallback } from "react";
import axios from "axios";

import "./login-form-style.css";

import Production from "../../config/production";
import Staging from "../../config/staging";

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

      makeAPICall()
        .then(response => console.log(response))
        .catch(err => console.log(err?.response?.data));
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

const makeAPICall = async userData => {
  const headers = {
    Accept: "application/json",
    DeviceId: "TestCompressUserDevice",
    OperatingSystem: "Android",
    OperatingSystemVersion: "v-3.2",
    DeviceName: "Samsung",
    protocol: "ipsec",
    ApiVersion: "v2",
    "Content-Type": "application/x-www-form-urlencoded"
  };

  var urlencoded = new URLSearchParams();
  urlencoded.append("extref", "TestCompress");

  const config = {
    method: "POST",
    url: Production.url,
    data: urlencoded,
    headers: headers
  };

  return await axios(config);
};

export default LoginForm;
