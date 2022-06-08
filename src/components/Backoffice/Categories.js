import React from "react";
import { Container } from "react-bootstrap";
import CategoriesTable from "../DataTable/CategoriesTable";
//import useFetch from "../../hooks/useFetch";

const Categories = () => {
  return (
    <Container fluid className="newsContainer">
      <Container className="my-5">
        <CategoriesTable></CategoriesTable>
      </Container>
    </Container>
  );
};

export default Categories;
