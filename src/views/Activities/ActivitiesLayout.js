import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./Activities.css";

const ActivitiesLayout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container className="my-5" style={{ minHeight: "70vh" }}>
      <Row>
        <Col className="text-center">
          <h2>Actividades</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet></Outlet>
        </Col>
        <Col className="d-flex justify-content-center" xxl={12}>
          <Button styles="primary" callbackClick={() => handleClick()}>
            Volver al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivitiesLayout;
