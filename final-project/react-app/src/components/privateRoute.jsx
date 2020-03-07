import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("currentUser") ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to="/auth/signin"
          />
        )
      }
    />
  );
};

export default PrivateRoute;
// {{ pathname: "/auth/signin", state: { from: props.location } }}