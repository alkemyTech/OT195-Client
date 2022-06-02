import React from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

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
        <a href="/" className="news-link">
          Ver todos &gt;
        </a>
      </Container>
      <Row>
        {news.map((data, key) => (
          <Col md={3} sm={6} key={key}>
            <Item image={data.image} text={data.content} link={data.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
