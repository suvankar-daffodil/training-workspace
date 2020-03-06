import React from "react";

import PrivateRoute from "./privateRoute";
import CustomAccessRoute from "./customAccessRoute";

import HomePage from "../pages/homePage";
import CreateNewPostPage from "../pages/createNewPostPage";
import CreateNewCategoryPage from "../pages/createNewCategoryPage";
import AuthPage from "../pages/authPage";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <PrivateRoute
          exact
          path="/"
          component={HomePage}
          currentUser={this.props.currentUser}
          // currentUser={JSON.parse(localStorage.getItem("currentUser"))}
        />
        <CustomAccessRoute
          path="/auth"
          component={AuthPage}
          toggleAuthState={this.props.toggleAuthState}
        />

        <PrivateRoute
          path="/createNewPost"
          component={CreateNewPostPage}
          currentUser={this.props.currentUser}
          // currentUser={JSON.parse(localStorage.getItem("currentUser"))}
        />
        <PrivateRoute
          path="/createNewCategory"
          component={CreateNewCategoryPage}
          currentUser={this.props.currentUser}
          // currentUser={JSON.parse(localStorage.getItem("currentUser"))}
          syncUserDetails={this.props.syncUserDetails}
        />
        <PrivateRoute
          path="/posts/:postId"
          component={HomePage}
          currentUser={this.props.currentUser}
          // currentUser={JSON.parse(localStorage.getItem("currentUser"))}
        />
      </>
    );
  }
}
