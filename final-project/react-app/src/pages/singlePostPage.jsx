import React from "react";

import Post from "../components/postComponent";
import SidePanel from "../components/profileSidePanel";
import ProfileMain from "../components/profileMainComponent";

const updateLikes = () => {
  
}

const SinglePostPage = props => {
  return (
    <div className="container">
      <div className="content">
        <ProfileMain>
          <Post {...props} />
        </ProfileMain>
        <SidePanel />
      </div>
    </div>
  );
};

export default SinglePostPage;
