import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import axios from "axios";

import Main from "./components/mainComponent";
import Header from "./components/headerComponent";
import Footer from "./components/footerComponent";
import { UserActions } from "./redux/user/user-actions";

const App = props => {

  const { currentUser, setCurrentUser } = props

  useEffect(() => {
    let value = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(value);
  }, []);

  const syncUserDetails = useCallback(async formData => {
    try {
      let response = await axios.post("http://localhost:5000/login", formData);
      setCurrentUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Main
          currentUser={currentUser}
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
