import React from "react";

import FormInput from "./formInputComponent";

const CreateNewPostForm = props => {
  return (
    <div className="drop-menu1">
      <h2>New Post</h2>
      <form onSubmit={props.handleNewPostFormSubmit}>
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

export default CreateNewPostForm;
