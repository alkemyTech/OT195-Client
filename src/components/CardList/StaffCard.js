import { Card, Col, Image, Row } from "react-bootstrap";

import imagePlaceholder from "../../images/backoffice/user.png";

const StaffCard = (props) => {
  const { cardData } = props;

  const { name, description } = cardData;

  return (
    <Col className="mb-3" style={{ minWidth: "235px" }}>
      <Card className="staffCard_container card-container d-flex flex-column justify-content-end">
        <Image src={imagePlaceholder} alt="staff" fluid></Image>
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
