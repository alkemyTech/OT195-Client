import { Container, Row } from "react-bootstrap";
import Option from "./Option";
import Header from "./Header";

import "./Backoffice.css";

const Backoffice = () => {
  return (
    <>
      <Header></Header>
      <Container fluid className="bo-container d-flex">
        <Container className="bo-container__options">
          <Row className="justify-content-between">
            <Option title="title" image=""></Option>
            <Option title="title" image=""></Option>
            <Option title="title" image=""></Option>
            <Option title="title" image=""></Option>
          </Row>
          <Row className="justify-content-between">
            <Option title="title" image=""></Option>
            <Option title="title" image=""></Option>
            <Option title="title" image=""></Option>
            <Option title="title" image=""></Option>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Backoffice;
