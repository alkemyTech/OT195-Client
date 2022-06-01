import { useField } from "formik";
import { Col, Row, Form } from "react-bootstrap";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group as={Row} className="mb-3">
      <Col sm="2">
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col sm="10">
        <Form.Select {...field} {...props} selected={meta.touched} />
        {meta.touched && meta.error ? <h6>{meta.error}</h6> : null}
      </Col>
    </Form.Group>
  );
};

export default Select;
