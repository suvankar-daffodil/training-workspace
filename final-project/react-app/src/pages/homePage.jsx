import React from "react";
import Axios from "axios";

import ProfileMain from "../components/profileMainComponent";
import Timeline from "../components/timelineComponent";
import SidePanel from "../components/profileSidePanel";
import ProfileCard from "../components/profileCardComponent";
import PostFilterPanel from "../components/postFilterPanelComponent";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filterTag: ""
    };
  }

  componentDidMount = () => {
    console.log("CALLED");
    Axios.get("http://localhost:5000/posts")
      .then(response => {
        this.setState({ posts: response.data.reverse() });
      })
      .catch(err => console.log(err));
  };

  onTagChange = tag => {
    this.setState({ filterTag: tag });
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          <ProfileMain>
            <ProfileCard currentUser={this.props.currentUser} />
            <Timeline
              posts={this.state.posts}
              filterTag={this.state.filterTag}
            />
          </ProfileMain>
          <SidePanel onTagChange={this.onTagChange} />
        </div>
      </div>
    );
  }
}
