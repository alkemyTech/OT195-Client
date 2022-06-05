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
    <div style={{ margin: "30px", width: "250px" }}>
      <label>{label}</label>
      <input
        style={{ width: "250px" }}
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
