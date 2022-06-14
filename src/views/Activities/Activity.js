import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import imagen from "../../images/Foto10.jpg";

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
          <Col className="text-center">
            <p className="my-5">
              <strong>
                La página no existe o se encuentra fuera de servicio
                actualmente.
              </strong>
            </p>
          </Col>
        </Row>
      </Container>
    );

  return (
    <Container>
      <Row className="my-2">
        <Col className="activity-image-container">
          <Image
            src={imagen}
            alt={data?.results.name}
            fluid
            className="h-100"
          ></Image>
        </Col>
      </Row>
      <Row className="my-3">
        <Col className="text-center">
          <h3>{data?.results.name}</h3>
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
