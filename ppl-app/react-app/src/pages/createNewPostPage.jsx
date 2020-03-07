import React from "react";

import CreateNewPost from "../components/createNewPostFormComponent";
import SidePanel from "../components/profileSidePanel";
import ProfileMain from "../components/profileMainComponent";

const CreateNewPostPage = props => {
  return (
    <div className="container">
      <div className="content">
        <ProfileMain>
          <CreateNewPost {...props} />
        </ProfileMain>
        <SidePanel {...props} />
      </div>
    </div>
  );
};

export default CreateNewPostPage;
