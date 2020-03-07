import React from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import FormInput from "./formInputComponent";

let currentUser = null;
let historyProp = null;
let syncUserDetails = null;

const handleSubmit = event => {
  event.preventDefault();
  let formData = new FormData(event.target);
  formData.set("user", currentUser._id);
  Axios.put("http://localhost:5000/categories", formData)
    .then(response => {
      response.data
        ? alert("New category added successfully!!!")
        : alert("Failed. Try again!!");
      syncUserDetails(currentUser);
    })
    .catch(error => {
      console.log(error);
    });
};

const CreateNewCategory = ({ history, ...props }) => {
  historyProp = history;
  currentUser = props.currentUser;
  syncUserDetails = props.syncUserDetails;
  return (
    <div className="register_sec">
      <h1>New Category</h1>
      <ul>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="category"
            label="Category"
            type="text"
            placeholder="Enter title for your new category"
          />
          <FormInput
            name="image"
            label="Thumbnail"
            type="file"
            placeholder="Upload picture"
          />
          <FormInput type="submit" value="Submit" />
        </form>
      </ul>
    </div>
  );
};

export default withRouter(CreateNewCategory);
