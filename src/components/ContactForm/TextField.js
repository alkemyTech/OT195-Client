import React from "react";

import { useField } from "formik";

const TextField = ({
  label,
  type = "text",
  min,
  max,
  placeholder,
  disabled = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="contact-textfield">
      <label>{label}</label>
      <input
        
        {...field}
        disabled={disabled}
        type={type}
        min={min}
        max={max}
        placeholder={placeholder}
      ></input>
      {meta.touched && meta.error ? <h6>{meta.error}</h6> : null}
    </div>
  );
};

export default TextField;
