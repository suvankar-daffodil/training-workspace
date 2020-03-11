import React from "react";
import Axios from "axios";
import { connect } from "react-redux";

import { PostActions } from "../redux/posts/post-actions";
import FormInput from "./formInputComponent";

const CreateNewCategoryForm = props => {
  const { setPosts, currentUser } = props;

  const handleNewCategoryFormSubmit = event => {
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
  };

  return (
    <div className="drop-menu2">
      <h2>New Category</h2>
      <form onSubmit={handleNewCategoryFormSubmit}>
        <FormInput
          name="category"
          label="Category"
          type="text"
          placeholder="Enter title for your new category"
        />
        <FormInput
          className="custom-file-upload"
          name="image"
          label="Thumbnail"
          type="file"
          placeholder="Upload picture"
        />
        <FormInput type="submit" value="Submit" />
      </form>
    </div>
  );
};

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts
});

const mapDispatchToProps = dispatch => ({
  setPosts: posts => dispatch({ type: PostActions.SET_POSTS, payload: posts })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewCategoryForm);
