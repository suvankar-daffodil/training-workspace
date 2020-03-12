import React from "react";
import Axios from "axios";
import { connect } from "react-redux";

import { PostActions } from "../../redux/posts/post-actions";
import FormInput from "../form-input";
import { apiRequests } from "../../API_REQUESTS";
import { UserActions } from "../../redux/user/user-actions";

const CreateNewCategoryForm = props => {
  const { setPosts, setCurrentUser, currentUser } = props;

  const handleNewCategoryFormSubmit = async event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.set("user", currentUser._id);

    try {
      let response = await apiRequests.ADD_CATEGORY(formData);
      if (response.data) {
        alert("New category added successfully!!!");
        setCurrentUser(response.data);
      } else alert("Failed. Try again!!");
    } catch (error) {
      console.log(error);
    }

    // Axios.post("http://192.168.100.171:5000/categories", formData)
    //   .then(response => {
    //     response.data
    //       ? alert("New category added successfully!!!")
    //       : alert("Failed. Try again!!");
    //     props.syncUserDetails(currentUser);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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
  setPosts: posts => dispatch({ type: PostActions.SET_POSTS, payload: posts }),
  setCurrentUser: user =>
    dispatch({ type: UserActions.SET_CURRENT_USER, payload: user })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewCategoryForm);
