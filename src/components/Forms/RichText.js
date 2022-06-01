import { useField, useFormikContext } from "formik";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Form, Col, Row } from "react-bootstrap";

const RichText = ({ label, placeholder, disabled = false, name, ...props }) => {
  const { setFieldValue, setFieldTouched, initialValues } = useFormikContext();
  const [, meta] = useField(name);

  return (
    <Form.Group className="mb-3" as={Row}>
      <Col sm="2">
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col sm="10">
        <CKEditor
          data={initialValues[name]}
          editor={ClassicEditor}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFieldValue(name, data);
          }}
          onBlur={() => {
            setFieldTouched(name, true);
          }}
          disabled={disabled}
        />
        {meta.touched && meta.error ? <h6>{meta.error}</h6> : null}
      </Col>
    </Form.Group>
  );
};

export default RichText;
