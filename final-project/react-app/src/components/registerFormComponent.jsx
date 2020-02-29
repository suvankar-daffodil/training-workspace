import React from "react";
import { Link } from "react-router-dom";
import FormInput from "./formInputComponent";
import Axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "profile-blank.png"
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let formData = this.state;
    Axios.post("http://localhost:5000/signup", formData)
      .then(response => {
        response.data
          ? alert("Signup Successfull!! Login to continue!!")
          : alert("User already exists!! Please try again..");
      })
      .catch(error => {
        alert("ERROR SAVING USER!!! TRY LATER.");
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="content_rgt">
        <div className="register_sec">
          <h1>Create An Account</h1>
          <ul>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                changeHandler={this.handleChange}
                name="firstname"
                label="Firstname"
                type="text"
                placeholder="Enter your firstname"
              />
              <FormInput
                changeHandler={this.handleChange}
                name="lastname"
                label="Lastname"
                type="text"
                placeholder="Enter your lastname"
              />
              <FormInput
                changeHandler={this.handleChange}
                name="gender"
                label="Gender"
                type="text"
                placeholder="Enter your gender"
              />
              <FormInput
                changeHandler={this.handleChange}
                name="email"
                label="Email"
                type="text"
                placeholder="Enter your email"
              />
              <FormInput
                changeHandler={this.handleChange}
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
            <Link to="/login">Login My Account !</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
