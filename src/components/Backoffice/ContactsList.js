import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactsTable from "../DataTable/ContactsTable";

const ContactsList = () => {
  return (
    <Container fluid className="newsContainer">
      <Container className="my-5">
        <Row>
          <Col>
            <ContactsTable></ContactsTable>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactsList;
