import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import FormInput from "./formInputComponent";
import Axios from "axios";

const SignIn = props => {
  const [formData, setFormData] = useState({});

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      Axios.post("http://localhost:5000/login", formData)
        .then(response => {
          response.data
            ? props.toggleAuthState(response.data)
            : alert("User or password incorrect!!");
        })
        .catch(error => {
          console.log(error);
        });
    },
    [formData]
  );

  const handleChange = useCallback(
    event => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    },
    [formData]
  );

  return (
    <div className="content_rgt">
      <div className="login_sec">
        <h1>Log In</h1>
        <ul>
          <form onSubmit={handleSubmit}>
            <FormInput
              changeHandler={handleChange}
              name="email"
              label="Email"
              type="text"
              placeholder="Enter your email"
            />
            <FormInput
              changeHandler={handleChange}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <li>
              <input type="checkbox" />
              Remember me
            </li>
            <li>
              <input type="submit" value="Login" />
              <Link to="/auth/password-reset">Forgot Password</Link>
            </li>
          </form>
        </ul>
        <div className="addtnal_acnt">
          I do not have any account yet.
          <Link replace to="/auth/signup">
            Create My Account Now !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
