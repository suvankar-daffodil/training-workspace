import React from "react";

import ProfileMain from "../components/profileMainComponent";
import Timeline from "../components/timelineComponent";
import SidePanel from "../components/profileSidePanel";
import ProfileCardComponent from "../components/profileCardComponent";
import MainComponent from "../components/mainComponent";

const HomePage = () => {
  return (
    <MainComponent>
      <ProfileMain>
        <ProfileCardComponent />
        <Timeline />
      </ProfileMain>
      <SidePanel />
    </MainComponent>
  );
};

export default HomePage;
