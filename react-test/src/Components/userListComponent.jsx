import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users, ...otherProps }) => {
  return (
    <div>
      USERS:
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <Link to={`/users/${user._id}`}>{user.firstname}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
