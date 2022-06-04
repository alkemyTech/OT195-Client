import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Activity = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    process.env.REACT_APP_ACTIVITIES_ENDPOINT + id
  );

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <Container>
        <Row>
          <Col>
            <p>
              La página no existe o se encuentra fuera de servicio actualmente.
            </p>
          </Col>
        </Row>
      </Container>
    );

  return (
    <Container>
      <Row className="my-3">
        <Col className="text-center">
          <h3>{data?.results.name}</h3>
        </Col>
      </Row>
      <Row className="my-2">
        <Col className="text-center">
          <img src={data?.results.image} alt={data?.results.name}></img>
        </Col>
      </Row>
      <Row className="my-3">
        <Col
          dangerouslySetInnerHTML={{ __html: data?.results.content }}
          className="activity-content"
        ></Col>
      </Row>
    </Container>
  );
};

export default Activity;
