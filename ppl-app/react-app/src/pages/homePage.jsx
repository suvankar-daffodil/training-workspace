import React, { useState, useCallback, useEffect } from "react";
import Axios from "axios";

import ProfileMain from "../components/profileMainComponent";
import Timeline from "../components/timelineComponent";
import SidePanel from "../components/profileSidePanel";
import ProfileCard from "../components/profileCardComponent";
import SinglePostPage from "./singlePostPage";

const fetchPosts = async () => {
  try {
    let response = await Axios.get("http://localhost:5000/posts");
    return response.data.reverse();
  } catch (err) {
    console.log(err);
  }
};

const HomePage = props => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchPosts().then(response => {
      setPosts(response);
    });
  }, []);

  useEffect(() => {
    if (props.location.state?.fromHeader) {
      props.location.state.fromHeader = false;
      setSelectedCategory("");
    }
  }, [props.location.state?.fromHeader]);

  const updatePostData = useCallback(
    (postId, commentBody) => {
      Axios.put(`http://localhost:5000/posts/${postId}`, {
        user: props.currentUser,
        body: commentBody
      })
        .then(response => {
          fetchPosts().then(result => setPosts(result));
        })
        .catch(err => console.log(err));
    },
    [props.currentUser]
  );

  const onSelectedCategoryChange = useCallback(tag => {
    setSelectedCategory(tag);
  }, []);

  return props.match.path === "/posts/:postId" ? (
    <SinglePostPage {...props} posts={posts} updatePostData={updatePostData} />
  ) : (
    <div className="container">
      <div className="content">
        <ProfileMain>
          <ProfileCard currentUser={props.currentUser} />
          <Timeline
            updatePostData={updatePostData}
            posts={posts}
            selectedCategory={selectedCategory}
          />
        </ProfileMain>
        <SidePanel
          {...props}
          onSelectedCategoryChange={onSelectedCategoryChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
