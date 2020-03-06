import React from "react";
import Axios from "axios";

import ProfileMain from "../components/profileMainComponent";
import Timeline from "../components/timelineComponent";
import SidePanel from "../components/profileSidePanel";
import ProfileCard from "../components/profileCardComponent";
import SinglePostPage from "./singlePostPage";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filterTag: ""
    };
  }

  componentDidMount = () => {
    this.fetchPosts();
  };

  fetchPosts = async () => {
    try {
      let response = await Axios.get("http://localhost:5000/posts");
      this.setState({ posts: response.data.reverse() });
    } catch (err) {
      console.log(err);
    }
  };

  updatePostData = (postId, commentBody) => {
    Axios.put(`http://localhost:5000/posts/${postId}`, {
      user: this.props.currentUser,
      body: commentBody
    })
      .then(response => {
        this.fetchPosts();
      })
      .catch(err => console.log(err));
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.dir(nextProps.location.state);
  //   if (nextProps.location.state.filterTag === "") {
  //     console.log("reset");
  //     nextProps.location.state.filterTag = null;
  //     return { filterTag: "" };
  //   } else {
  //     console.log("success");
  //     return null;
  //   }
  // }

  onTagChange = tag => {
    this.setState({ filterTag: tag });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     JSON.stringify(nextProps.location.state) + "," + nextState.filterTag
  //   );
  //   return true;
  // }

  render() {
    if (this.props.match.path === "/posts/:postId")
      return (
        <SinglePostPage
          {...this.props}
          posts={this.state.posts}
          updatePostData={this.updatePostData}
        />
      );
    else
      return (
        <div className="container">
          <div className="content">
            <ProfileMain>
              <ProfileCard currentUser={this.props.currentUser} />
              <Timeline
                updatePostData={this.updatePostData}
                posts={this.state.posts}
                filterTag={this.state.filterTag}
              />
            </ProfileMain>
            <SidePanel {...this.props} onTagChange={this.onTagChange} />
          </div>
        </div>
      );
  }
}
