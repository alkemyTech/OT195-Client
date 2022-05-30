import React from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
//import useFetch from "../../hooks/useFetch";
import img_manos from "../../images/img_manos.png";
import NewsTable from "../DataTable/NewsTable";

import "./NewsTable.css";

const News = () => {
  return (
    <>
      <Container fluid className="newsContainer">
        <Container className="my-5">
          <Row className="newsTitle">
            <Col>
              <h2>Listado de novedades</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <NewsTable></NewsTable>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default News;
