import React from "react";

import PrivateRoute from "./route-components/privateRoute";
import CustomAccessRoute from "./route-components/customAccessRoute";

import HomePage from "../pages/homePage";
import AuthPage from "../pages/authPage";

const Main = props => {
  return (
    <>
      <PrivateRoute
        exact
        path="/"
        component={HomePage}
        currentUser={props.currentUser}
        syncUserDetails={props.syncUserDetails}
      />
      <CustomAccessRoute
        path="/auth"
        component={AuthPage}
        currentUser={props.currentUser}
      />

      <PrivateRoute
        path="/posts/:postId"
        component={HomePage}
        currentUser={props.currentUser}
      />
    </>
  );
};

export default Main;
