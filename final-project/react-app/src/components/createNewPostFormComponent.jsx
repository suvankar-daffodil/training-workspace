import React from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import FormInput from "./formInputComponent";

let currentUser = null;
let historyProp = null;

const handleSubmit = event => {
  event.preventDefault();
  let formData = new FormData(event.target);
  let today = new Date();
  let date =
    today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  formData.set("date", date);
  formData.set("time", time);
  formData.set("userName", currentUser.firstname + " " + currentUser.lastname);
  formData.set("userId", currentUser._id);
  Axios.post("http://localhost:5000/posts", formData)
    .then(response => {
      response.data
        ? alert("Upload Successfull!!")
        : alert("Upload failed. Try again!!");
      historyProp.push("/");
    })
    .catch(error => {
      console.log(error);
    });
};

const CreateNewPost = ({ history, ...props }) => {
  historyProp = history;
  currentUser = props.currentUser;
  return (
    <div className="register_sec">
      <h1>New Post</h1>
      <ul>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="title"
            label="Title"
            type="text"
            placeholder="Enter title for your post"
          />
          <li>
            <span>Tag</span>
            <select name="tag">
              <option></option>
              {currentUser.categories.map(category => (
                <option value={category.name.slice(0, -1).toUpperCase()}>
                  {category.name.slice(0, -1).toUpperCase()}
                </option>
              ))}
            </select>
          </li>
          <FormInput
            name="image"
            label="Image"
            type="file"
            placeholder="Upload picture"
          />
          <FormInput type="submit" value="Upload Post" />
        </form>
      </ul>
    </div>
  );
};

export default withRouter(CreateNewPost);
