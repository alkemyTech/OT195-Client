import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UsersTable from "../DataTable/UsersTable";

const Users = () => {
  return (
    <Container fluid className="newsContainer">
      <Container className="my-5">
        <Row className="usersTitle">
          <Col>
            <h2>Listado de Usuarios</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <UsersTable></UsersTable>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Users;
