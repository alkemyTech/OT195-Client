import React from "react";
import { Container } from "react-bootstrap";
import TestimonialsTable from "../DataTable/TestimonialsTable";

const Testimonials = () => {
  return (
    <Container fluid>
      <Container className="my-5">
        <TestimonialsTable></TestimonialsTable>
      </Container>
    </Container>
  );
};
export default Testimonials;
