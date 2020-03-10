import React from "react";
import { Route, Redirect } from "react-router-dom";

const CustomAccessRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default CustomAccessRoute;
