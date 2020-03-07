import React from "react";

import NewCategoryForm from "../components/newCategoryFormComponent";
import SidePanel from "../components/profileSidePanel";
import ProfileMain from "../components/profileMainComponent";

const CreateNewCategoryPage = props => {
  return (
    <div className="container">
      <div className="content">
        <ProfileMain>
          <NewCategoryForm {...props} />
        </ProfileMain>
        <SidePanel {...props} />
      </div>
    </div>
  );
};

export default CreateNewCategoryPage;
