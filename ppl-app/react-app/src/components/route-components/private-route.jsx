import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{ pathname: "/auth/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
