import React from "react";

import PrivateRoute from "./route-components/private-route";
import CustomAccessRoute from "./route-components/custom-route";

import HomePage from "../pages/home";
import AuthPage from "../pages/authentication";
import SinglePostPage from "../pages/single-post";

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
        component={SinglePostPage}
        currentUser={props.currentUser}
      />
    </>
  );
};

export default Main;
