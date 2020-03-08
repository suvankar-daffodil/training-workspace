import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import FormInput from "./formInputComponent";
import Axios from "axios";

const Register = props => {
  const [formData, setFormData] = useState({ picture: "profile-blank.png" });

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      Axios.post("http://localhost:5000/signup", formData)
        .then(response => {
          response.data
            ? alert("Signup Successfull!! Login to continue!!")
            : alert("User already exists!! Please try again..");
        })
        .catch(error => {
          alert("ERROR SAVING USER!!! TRY LATER.");
        });
    },
    [formData]
  );

  const handleChange = useCallback(
    event => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    },
    [formData]
  );

  return (
    <div className="content_rgt">
      <div className="register_sec">
        <h1>Create An Account</h1>
        <ul>
          <form onSubmit={handleSubmit}>
            <FormInput
              changeHandler={handleChange}
              name="firstname"
              label="Firstname"
              type="text"
              placeholder="Enter your firstname"
            />
            <FormInput
              changeHandler={handleChange}
              name="lastname"
              label="Lastname"
              type="text"
              placeholder="Enter your lastname"
            />
            <FormInput
              changeHandler={handleChange}
              name="gender"
              label="Gender"
              type="text"
              placeholder="Enter your gender"
            />
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
              <input type="checkbox" />I agree to Term &amp; Conditions
            </li>
            <li>
              <input type="submit" value="Register" />
            </li>
          </form>
        </ul>
        <div className="addtnal_acnt">
          I already have an account.
          <Link replace to="/auth/signin">
            Login My Account !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
