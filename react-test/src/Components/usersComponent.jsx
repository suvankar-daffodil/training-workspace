import React from "react";
import { Route, Switch } from "react-router-dom";
import UserList from "./userListComponent";
import Profile from "./profileComponent";

const Users = ({ users, ...otherProps }) => {
  return (
    <Switch>
      <Route
        exact
        path="/users"
        render={props => <UserList users={users} {...props} />}
      />
      <Route
        path="/users/:id"
        render={props => <Profile users={users} {...props} />}
      />
    </Switch>
  );
};

export default Users;
