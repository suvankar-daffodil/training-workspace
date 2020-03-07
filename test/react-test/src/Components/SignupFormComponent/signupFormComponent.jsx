import React from "react";
import "./signupFormComponentStyle.css";
const axios = require("axios");

class SignupFormComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      name: null,
      email: null,
      phone: null,
      password: null,
      picture: null
    };
  }

  onAuthenticate = event => {
    // fetch("http://localhost:5000/auth/google", {
    //   mode: "no-cors"
    // })
    //   .then(result => console.log("successsfull"))
    //   .catch(err => console.log(err));

    axios
      .get("http://localhost:5000/auth/google")
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => {});
  };

  handleChange = event => {
    if (event.target.name === "image")
      this.setState({ [event.target.name]: event.target.files[0] });
    else this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log(formData);
    axios
      .post("http://localhost:5000/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        alert("User saved successfully!!!!!");
      })
      .catch(error => {});
  };

  render() {
    return (
      <form encType="multipart/form-data" onSubmit={this.onFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label>
            <b>Name</b>
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Name"
            name="name"
            required
          />

          <label>
            <b>Email</b>
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label>
            <b>Phone</b>
          </label>
          <input
            onChange={this.handleChange}
            type="number"
            placeholder="Enter Phone Number"
            name="phone"
            required
          />

          <label>
            <b>Password</b>
          </label>
          <input
            onChange={this.handleChange}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <label>
            <b>Image</b>
          </label>
          <input
            onChange={this.handleChange}
            type="file"
            name="image"
            accept="image/*"
          />

          <div className="clearfix">
            <a className="cancelbtn" href="http://localhost:5000/auth/google">
              SignUp with Google+
            </a>
            {/* <button className="cancelbtn" onClick={this.onAuthenticate}>
              SignUp with Google+
            </button> */}
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SignupFormComponent;
