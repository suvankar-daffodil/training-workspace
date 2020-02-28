import React from "react";

const ProfileMain = props => {
  if (props.children.size > 1)
    return (
      <div className="content_lft">{props.children.map(elem => elem)}</div>
    );
  else return <div className="content_lft">{props.children}</div>;
};

export default ProfileMain;
