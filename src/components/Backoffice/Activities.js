import React from "react";
import { Container } from "react-bootstrap";
import ActivitiesTable from "../DataTable/ActivitiesTable";

const Activities = () => {
  return (
    <Container fluid>
      <Container className="my-5">
        <ActivitiesTable></ActivitiesTable>
      </Container>
    </Container>
  );
};

export default Activities;
