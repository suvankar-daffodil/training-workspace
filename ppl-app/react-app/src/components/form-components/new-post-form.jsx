import React, { useState } from "react";
import { connect } from "react-redux";

import PopUp from "../alert-pop-up";
import { PostActions } from "../../redux/posts/post-actions";
import FormInput from "../form-input";
import { addPost, fetchAllPosts } from "../../api";

const CreateNewPostForm = props => {
  const { setPosts } = props;
  const [popUpData, setPopUpData] = useState(null);

  const handleNewPostFormSubmit = async event => {
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
      props.currentUser.firstname + " " + props.currentUser.lastname
    );
    formData.set("userId", props.currentUser._id);

    try {
      let response = await addPost(formData);
      if (response.data) {
        setPopUpData({ title: "", message: "Upload Successfull!!" });
        let response = await fetchAllPosts();
        if (response) setPosts(response.data.reverse());
      } else {
        setPopUpData({ title: "", message: "Upload failed. Try again!!" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {popUpData ? <PopUp {...popUpData} setPopUpData={setPopUpData} /> : null}

      <div className="drop-menu1">
        <h2>New Post</h2>
        <form onSubmit={handleNewPostFormSubmit}>
          <FormInput
            name="title"
            label="Title"
            type="text"
            placeholder="Enter title for your post"
          />
          <span>Tag</span>
          <select name="tag">
            <option>Select category tag</option>
            {props.currentUser?.categories?.map((category, index) => (
              <option
                key={index}
                value={category.name.slice(0, -1).toUpperCase()}
              >
                {category.name.slice(0, -1).toUpperCase()}
              </option>
            ))}
          </select>
          <FormInput
            name="image"
            label="Image"
            type="file"
            placeholder="Upload picture"
          />
          <FormInput type="submit" value="Upload Post" />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts
});

const mapDispatchToProps = dispatch => ({
  setPosts: posts => dispatch({ type: PostActions.SET_POSTS, payload: posts })
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPostForm);
