import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./CardList.css";
import Loader from "../Loader/Loader";

const CardList = (props) => {
  const { title, data, CardComponent, loading, link } = props;

  return (
    <Container className="my-4" fluid>
      <Row className="mb-3">
        <Col>
          <h2 className="cardList_title">{title}</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <Link to={link} className="link">
            Ver todos &gt;
          </Link>
        </Col>
      </Row>
      <Row className="card-row">
        {!loading ? (
          data.map((el, index) => (
            <CardComponent cardData={el} key={index}></CardComponent>
          ))
        ) : (
          <Container className="m-5">
            <Loader></Loader>
          </Container>
        )}
      </Row>
    </Container>
  );
};

export default CardList;
