import React, { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import $ from "jquery";
import { connect } from "react-redux";

import { apiRequests } from "../API_REQUESTS";
import { PostActions } from "../redux/posts/post-actions";
import Timeline from "../components/post-container";
import SidePanel from "../components/side-panel";
import ProfileCard from "../components/profile-card";

const HomePage = props => {
  const { currentUser, setPosts } = props;
  const [selectedCategory, setSelectedCategory] = useState("");

  const onSelectedCategoryChange = useCallback(tag => {
    setSelectedCategory(tag);
  }, []);

  useEffect(() => {
    $("#rght_cat_bg").click(() => {
      $(".rght_list").toggle("slide");
    });

    $("#opn_cat_bg").click(() => {
      $(".sub_dwn").toggle("slide");
    });

    $(".rght_btn1").click(() => {
      $(".drop-menu1").toggle("slide");
    });

    $(".rght_btn2").click(() => {
      $(".drop-menu2").toggle("slide");
    });

    $(".drop-menu1 input[type='submit']").click(() => {
      $(".drop-menu1").toggle("slide");
    });

    $(".drop-menu2 input[type='submit']").click(() => {
      $(".drop-menu2").toggle("slide");
    });

    apiRequests.FETCH_ALL_POSTS().then(response => {
      setPosts(response.data.reverse());
    });
  }, []);

  useEffect(() => {
    if (props.location.state?.fromHeader) {
      props.location.state.fromHeader = false;
      setSelectedCategory("");
    }
  }, [props.location.state?.fromHeader]);

  return (
    <div className="container">
      <div className="content">
        <div className="content_lft">
          <ProfileCard currentUser={currentUser} />
          <Timeline
            selectedCategory={selectedCategory}
            currentUser={currentUser}
          />
        </div>
        <SidePanel
          currentUser={currentUser}
          onSelectedCategoryChange={onSelectedCategoryChange}
          syncUserDetails={props.syncUserDetails}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts
});

const mapDispatchToProps = dispatch => ({
  setPosts: posts => dispatch({ type: PostActions.SET_POSTS, payload: posts })
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
