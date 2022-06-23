import { Card, Col, Image, Row } from "react-bootstrap";

const TestimonyCard = (props) => {
  const { cardData } = props;

  const { name, content, image } = cardData;

  return (
    <Col className="mb-lg-3 mb-xl-0 card-container">
      <Card className="testimonyCard_container">
        <Row className="mx-2 my-3 ">
          <Col xs={12}>
            <Image
              roundedCircle
              width="75"
              height="75"
              style={{ objectFit: "cover" }}
              src={image}
              alt="user"
              className="mb-2"
            ></Image>
          </Col>
          <Col xs={12} className="mb-2">
            <h6 className="m-0">{name}</h6>
          </Col>
          <Col
            xs={12}
            dangerouslySetInnerHTML={{ __html: content }}
            className="testimonyQuote"
          >
            {/* <p className="m-0 testimonyQuote">{content}</p> */}
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TestimonyCard;
