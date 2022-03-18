import React from "react";
import "./custombutton.scss";

const CustomButton = ({ title, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {title}
    </button>
  );
};

export default CustomButton;
