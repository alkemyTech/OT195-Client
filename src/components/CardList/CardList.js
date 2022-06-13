import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import StaffCard from "./StaffCard";

import "./CardList.css";

const CardList = (props) => {
  const { title, data, CardComponent, link } = props;

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
      <Row>
        {data.map((el) => (
          <CardComponent cardData={el}></CardComponent>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;
