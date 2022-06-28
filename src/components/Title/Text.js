import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import Button from "../Button/";

const Text = (props) => {
  const { title, text } = props;

  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <h1>{title}</h1>
          <p>{text}</p>
          <div>
            <Button styles="primary btn-title btn-lg py-3 px-5">
              Contactanos
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Text;
