import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/headerComponent";
import Footer from "./components/footerComponent";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import HomePage from "./pages/homePage";

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact="true"
            path="/"
            component={this.state.isLoggedIn ? HomePage : LoginPage}
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
