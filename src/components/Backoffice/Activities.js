import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ActivitiesTable from "../DataTable/ActivitiesTable";

const Activities = () => {
  return (
    <Container fluid className="newsContainer">
      <Container className="my-5">
        <Row className="usersTitle">
          <Col>
            <h2>Listado de Actividades</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ActivitiesTable></ActivitiesTable>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Activities;
