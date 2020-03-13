import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PopUp from "../alert-pop-up";
import { loginUser } from "../../api";
import { UserActions } from "../../redux/user/user-actions";
import FormInput from "../form-input";
import { useEffect } from "react";

const SignIn = props => {
  const { setCurrentUser } = props;
  const [formData, setFormData] = useState({});
  const [popUpData, setPopUpData] = useState(false);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      try {
        let response = await loginUser(formData);
        if (response.data) {
          localStorage.setItem("currentUser", response.data._id);
          setCurrentUser(response.data);
        } else setPopUpData(true);
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
    <>
      {popUpData ? <PopUp {...popUpData} setPopUpData={setPopUpData} /> : null}

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
    </>
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
