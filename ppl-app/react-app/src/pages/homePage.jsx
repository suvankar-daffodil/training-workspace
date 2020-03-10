import React, { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import $ from "jquery";

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
  const { currentUser } = props;
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleNewCategoryFormSubmit = useCallback(event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.set("user", currentUser._id);
    Axios.post("http://localhost:5000/categories", formData)
      .then(response => {
        response.data
          ? alert("New category added successfully!!!")
          : alert("Failed. Try again!!");
        props.syncUserDetails(currentUser);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleNewPostFormSubmit = useCallback(event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let today = new Date();
    let date =
      today.getDate() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    formData.set("date", date);
    formData.set("time", time);
    formData.set(
      "userName",
      currentUser.firstname + " " + currentUser.lastname
    );
    formData.set("userId", currentUser._id);
    Axios.post("http://localhost:5000/posts", formData)
      .then(response => {
        response.data
          ? alert("Upload Successfull!!")
          : alert("Upload failed. Try again!!");
        fetchPosts().then(response => {
          setPosts(response);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const updatePostData = useCallback(
    (postId, commentBody) => {
      Axios.put(`http://localhost:5000/posts/${postId}`, {
        user: currentUser,
        body: commentBody
      })
        .then(response => {
          fetchPosts().then(result => setPosts(result));
        })
        .catch(err => console.log(err));
    },
    [currentUser]
  );

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

  return props.match.path === "/posts/:postId" ? (
    <SinglePostPage {...props} posts={posts} updatePostData={updatePostData} />
  ) : (
    <div className="container">
      <div className="content">
        <ProfileMain>
          <ProfileCard currentUser={currentUser} />
          <Timeline
            updatePostData={updatePostData}
            posts={posts}
            selectedCategory={selectedCategory}
          />
        </ProfileMain>
        <SidePanel
          {...props}
          handleNewCategoryFormSubmit={handleNewCategoryFormSubmit}
          handleNewPostFormSubmit={handleNewPostFormSubmit}
          onSelectedCategoryChange={onSelectedCategoryChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
