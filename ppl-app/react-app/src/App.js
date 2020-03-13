import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";

import Main from "./components/main";
import Footer from "./components/footer";
import Header from "./components/header";
import { UserActions } from "./redux/user/user-actions";
import { loginUser } from "./api";

const App = props => {
  const { currentUser, setCurrentUser } = props;

  useEffect(() => {
    let value = localStorage.getItem("currentUser");
    loginUser({ _id: value })
      .then(response => {
        setCurrentUser(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Main currentUser={currentUser} />
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
