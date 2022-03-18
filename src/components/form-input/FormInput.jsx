import React from "react";
import "./forminput.scss";

const FormInput = ({ title, handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {title ? (
        <label
          className={`${
            otherProps.value.length ? `shrink` : ``
          } form-input-label `}
        >
          {title}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
