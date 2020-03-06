import React from "react";
import { Switch } from "react-router-dom";
import axios from "axios";

import Main from "./components/mainComponent";
import Header from "./components/headerComponent";
import Footer from "./components/footerComponent";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        _id: "",
        picture: "",
        firstname: "",
        lastname: "",
        gender: "",
        email: "",
        password: "",
        categories: []
      }
    };
  }

  toggleAuthState = currentUser => {
    currentUser
      ? localStorage.setItem("currentUser", JSON.stringify(currentUser))
      : localStorage.removeItem("currentUser");
    currentUser
      ? this.setState({ currentUser: currentUser })
      : this.setState({ currentUser: null });
  };

  syncUserDetails = async formData => {
    try {
      let response = await axios.post("http://localhost:5000/login", formData);
      this.setState({ currentUser: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    let value = JSON.parse(localStorage.getItem("currentUser"));
    this.setState({ currentUser: value });
  }

  render() {
    return (
      <>
        <Header
          currentUser={this.state.currentUser}
          toggleAuthState={this.toggleAuthState}
        />
        <Switch>
          <Main
            currentUser={this.state.currentUser}
            toggleAuthState={this.toggleAuthState}
            syncUserDetails={this.syncUserDetails}
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
