import { Card, Col, Image, Row } from "react-bootstrap";

const StaffCard = (props) => {
  const { cardData } = props;

  const { name, description, image } = cardData;

  return (
    <Col className="mb-3 card-container">
      <Card className="staffCard_container d-flex flex-column justify-content-end">
        <Image src={image} alt="staff" fluid></Image>
        <Row className="mb-3">
          <Col xs={12}>
            <h4 className="text-center px-2">{name}</h4>
          </Col>
          <Col xs={12}>
            <p className="m-0 text-center">{description}</p>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default StaffCard;
