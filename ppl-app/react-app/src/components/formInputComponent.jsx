import React from "react";

const FormInput = ({ changeHandler, label, ...otherProps }) => {
  return (
    <li>
      <span>{label}</span>
      <input onChange={changeHandler} {...otherProps} />
    </li>
  );
};

export default FormInput;
