import React from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./News.css";

const News = () => {
  const { data: publicInfo, loading } = useFetch(
    process.env.REACT_APP_NEWS_ENDPOINT
  );

  const news = publicInfo.results ? publicInfo.results.slice(-4) : [];

  if (loading) {
    return <Loader />;
  }
  return (
    <Container fluid className="mb-5 px-5">
      <Container
        fluid
        className="justify-content-between d-flex news-text mb-3"
      >
        <h1>Últimas novedades</h1>
        <Link to="/novedades/all" className="news-link">
          Ver todos &gt;
        </Link>
      </Container>
      <Row>
        {news.map((data, key) => (
          <Col md={3} sm={6} key={key}>
            <Item data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
