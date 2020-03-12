import React from "react";
import Axios from "axios";
import { connect } from "react-redux";

import { PostActions } from "../../redux/posts/post-actions";
import FormInput from "../form-input";
import { apiRequests } from "../../API_REQUESTS";

// const fetchPosts = async () => {
//   try {
//     let response = await Axios.get("http://192.168.100.171:5000/posts");
//     return response.data.reverse();
//   } catch (err) {
//     console.log(err);
//   }
// };

const CreateNewPostForm = props => {
  const { setPosts } = props;

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
      let response = await apiRequests.ADD_POST(formData);
      if (response.data) {
        alert("Upload Successfull!!");
        let response = await apiRequests.FETCH_ALL_POSTS();
        if (response) setPosts(response.data.reverse());
      } else {
        alert("Upload failed. Try again!!");
      }
    } catch (error) {
      console.log(error);
    }

    // Axios.post("http://192.168.100.171:5000/posts", formData)
    //   .then(response => {
    //     response.data
    //       ? alert("Upload Successfull!!")
    //       : alert("Upload failed. Try again!!");
    //     fetchPosts().then(response => {
    //       setPosts(response);
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
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
  );
};

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts
});

const mapDispatchToProps = dispatch => ({
  setPosts: posts => dispatch({ type: PostActions.SET_POSTS, payload: posts })
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPostForm);
