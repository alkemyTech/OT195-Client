import { useFormikContext, useField } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Form, Image, Row } from "react-bootstrap";

const ImageInput = (props) => {
  const { name, label } = props;

  // Use the formik context to set the field value manually
  const { setFieldValue } = useFormikContext();

  const [field, meta] = useField(props);

  // State to handle the image preview
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    // Handle image preview
    if (field.value !== null && typeof field.value !== "object") {
      setImagePreview(field.value);
    }
    if (field.value === null)
      setImagePreview(
        "https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
      );
  }, [field.value]);

  const handleChange = (value) => {
    // Initialize fileReader to display the selected image.
    const reader = new FileReader();

    // On change set the field value to the selected image.
    setFieldValue(name, value);

    // Then I request the reader to read the image as an url.
    reader.readAsDataURL(value);

    // Once the reader has finished reading the image, set the field value to the imagePreview state
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  return (
    <Form.Group className="mb-3 fieldContainer" as={Row}>
      <Col sm="2" className="fieldLabel">
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col sm="10" className="fieldControl d-flex flex-column">
        <Form.Control
          type="file"
          onBlur={field.onBlur}
          name={field.name}
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => handleChange(e.currentTarget.files[0])}
        ></Form.Control>
        <Image
          thumbnail
          src={imagePreview}
          width="200"
          styles={{ maxHeight: "200px", objectFit: "contain !important" }}
          className="my-3 mx-auto"
        />
        {meta.touched && meta.error ? <h6>{meta.error}</h6> : null}
      </Col>
    </Form.Group>
  );
};

export default ImageInput;
