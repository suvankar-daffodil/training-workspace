import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/headerComponent";
import Footer from "./components/footerComponent";
import ResetPasswordPage from "./pages/resetPasswordPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import HomePage from "./pages/homePage";
import CreateNewPostPage from "./pages/createNewPostPage";

class App extends React.Component {
  state = {
    currentUser: null
  };

  toggleAuthState = currentUser => {
    currentUser
      ? localStorage.setItem("currentUser", JSON.stringify(currentUser))
      : localStorage.removeItem("currentUser");
    currentUser
      ? this.setState({ currentUser: currentUser })
      : this.setState({ currentUser: null });
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
          <Route
            exact
            path="/"
            render={props =>
              this.state.currentUser ? (
                <HomePage
                  currentUser={this.state.currentUser}
                  onTagChange={this.onTagChange}
                  {...props}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/login"
            render={props =>
              this.state.currentUser ? (
                <Redirect to="/" />
              ) : (
                <LoginPage {...props} toggleAuthState={this.toggleAuthState} />
              )
            }
          />
          <Route
            path="/register"
            render={props =>
              this.state.currentUser ? (
                <Redirect to="/" />
              ) : (
                <RegisterPage {...props} />
              )
            }
          />
          <Route
            path="/resetPassword"
            render={props =>
              this.state.currentUser ? (
                <Redirect to="/" />
              ) : (
                <ResetPasswordPage {...props} />
              )
            }
          />
          <Route
            path="/createNewPost"
            render={props =>
              this.state.currentUser ? (
                <CreateNewPostPage
                  currentUser={this.state.currentUser}
                  {...props}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
