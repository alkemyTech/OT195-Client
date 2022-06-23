import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./CardList.css";
import Loader from "../Loader/Loader";

// const CardList = (props) => {
export default function CardListTestimony(props){

  let { title, data, CardComponent, loading, link } = props;

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
          data.slice(-5).map((el, index) => ( // corto el array para que muestre solamente los ultimos 5
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

// export default CardList;