import React from "react";

import PrivateRoute from "./route-components/privateRoute";
import CustomAccessRoute from "./route-components/customAccessRoute";

import HomePage from "../pages/homePage";
import CreateNewPostPage from "../pages/createNewPostPage";
import CreateNewCategoryPage from "../pages/createNewCategoryPage";
import AuthPage from "../pages/authPage";

const Main = props => {
  return (
    <>
      <PrivateRoute
        exact
        path="/"
        component={HomePage}
        currentUser={props.currentUser}
      />
      <CustomAccessRoute
        path="/auth"
        component={AuthPage}
        toggleAuthState={props.toggleAuthState}
      />

      <PrivateRoute
        path="/createNewPost"
        component={CreateNewPostPage}
        currentUser={props.currentUser}
      />
      <PrivateRoute
        path="/createNewCategory"
        component={CreateNewCategoryPage}
        currentUser={props.currentUser}
        syncUserDetails={props.syncUserDetails}
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
