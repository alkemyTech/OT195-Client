import { Card, Col, Image, Row } from "react-bootstrap";
import imagePlaceholder from "../../images/backoffice/user.png";

const TestimonyCard = (props) => {
  const { cardData } = props;

  const { name, description, image } = cardData;

  return (
    <Col className="mb-3" style={{ minWidth: "235px" }}>
      <Card className="testimonyCard_container card-container">
        <Row className="mx-2 my-4 ">
          <Col xs={12}>
            <Image
              roundedCircle
              style={{ width: "75px" }}
              src={imagePlaceholder}
              alt="user"
              className="mb-2"
            ></Image>
          </Col>
          <Col xs={12} className="mb-2">
            <h6 className="m-0">{name}</h6>
          </Col>
          <Col xs={12}>
            <p className="m-0 testimonyQuote">{description}</p>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TestimonyCard;