import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import axios from "axios";

import Main from "./components/mainComponent";
import Header from "./components/headerComponent";
import Footer from "./components/footerComponent";
import { UserActions } from "./redux/user/user-actions";

const App = props => {
  // const [currentUser, setCurrentUser] = useState();

  const toggleAuthState = useCallback(
    currentUser => {
      currentUser
        ? localStorage.setItem("currentUser", JSON.stringify(currentUser))
        : localStorage.removeItem("currentUser");
      currentUser ? setCurrentUser(currentUser) : setCurrentUser(null);
    },
    [currentUser]
  );

  const syncUserDetails = useCallback(async formData => {
    try {
      let response = await axios.post("http://localhost:5000/login", formData);
      setCurrentUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    let value = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(value);
  }, []);

  return (
    <>
      <Header currentUser={currentUser} toggleAuthState={toggleAuthState} />
      <Switch>
        <Main
          currentUser={currentUser}
          toggleAuthState={toggleAuthState}
          syncUserDetails={syncUserDetails}
        />
      </Switch>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ currentUser }) => ({
  currentUser: currentUser.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user =>
    dispatch({
      type: UserActions.SET_CURRENT_USER,
      payload: user
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
