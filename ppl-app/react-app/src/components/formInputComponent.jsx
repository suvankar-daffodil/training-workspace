import React from "react";

const FormInput = ({ changeHandler, label, className, ...otherProps }) => {
  return (
    <li>
      <label className={className} for={label}><span>{label}</span></label>
      <input id={label} onChange={changeHandler} {...otherProps} />
    </li>
  );
};

export default FormInput;
