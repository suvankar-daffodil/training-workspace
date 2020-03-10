import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";

import { UserActions } from "../redux/user/user-actions";
import FormInput from "./formInputComponent";

const SignIn = props => {
  const { setCurrentUser } = props;
  const [formData, setFormData] = useState({});

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      try {
        let response = await Axios.post(
          "http://localhost:5000/login",
          formData
        );
        if (response.data) {
          localStorage.setItem("currentUser", JSON.stringify(response.data));
          setCurrentUser(response.data);
        } else alert("User or password incorrect!!");
      } catch (err) {
        console.log(err);
      }
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user =>
    dispatch({
      type: UserActions.SET_CURRENT_USER,
      payload: user
    })
});

export default connect(null, mapDispatchToProps)(SignIn);
