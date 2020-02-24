import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import SignIn from "./pages/signin/signInComponent";
import Header from "./components/headerComponent/headerComponent";
import Footer from "./components/footerComponent/footerComponent";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/login" component={SignIn} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
