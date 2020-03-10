import React from "react";

import FormInput from "./formInputComponent";

const CreateNewCategoryForm = props => {
  return (
    <div className="drop-menu2">
      <h2>New Category</h2>
      <form onSubmit={props.handleNewCategoryFormSubmit}>
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

export default CreateNewCategoryForm;
