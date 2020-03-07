import React from "react";

const Profile = ({ users, ...otherProps }) => {
  return users
    .filter(user => user._id == otherProps.match.params.id)
    .map(user => <div key={user._id}>{JSON.stringify(user)}</div>);
};

export default Profile;
