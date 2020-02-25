import React from "react";

const ProfileMain = props => (
  <div className="content_lft">{props.children.map(elem => elem)}</div>
);

export default ProfileMain;
