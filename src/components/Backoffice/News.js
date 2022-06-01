import React from "react";
import { Container } from "react-bootstrap";
//import useFetch from "../../hooks/useFetch";

import NewsTable from "../DataTable/NewsTable";

const News = () => {
  return (
    <>
      <Container fluid className="newsContainer">
        <Container className="my-5">
          <NewsTable></NewsTable>
        </Container>
      </Container>
    </>
  );
};

export default News;
