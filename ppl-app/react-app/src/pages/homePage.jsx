import React, { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import $ from "jquery";
import { connect } from "react-redux";

import { PostActions } from "../redux/posts/post-actions";
import Timeline from "../components/timelineComponent";
import SidePanel from "../components/profileSidePanel";
import ProfileCard from "../components/profileCardComponent";

const fetchPosts = async () => {
  try {
    let response = await Axios.get("http://localhost:5000/posts");
    return response.data.reverse();
  } catch (err) {
    console.log(err);
  }
};

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

  return (
    <div className="container">
      <div className="content">
        <div className="content_lft">
          <ProfileCard currentUser={currentUser} />
          <Timeline selectedCategory={selectedCategory} />
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
