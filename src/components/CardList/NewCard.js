import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewCard = (props) => {
  const { cardData } = props;
  const navigate = useNavigate();

  const callbackClick = () => {
    return navigate("/news/" + cardData.id);
  };

  return (
    <Col className="mb-3 card-container news">
      <Card className="newCard_container h-100">
        <Row className="d-flex mx-2 my-3 h-100">
          <Col md={6} xs={12} className="my-auto">
            <Image src={cardData?.image} fluid rounded></Image>
          </Col>
          <Col
            md={6}
            xs={12}
            className="news-content d-flex flex-column justify-content-between"
          >
            <div dangerouslySetInnerHTML={{ __html: cardData?.content }}></div>
          </Col>
            <Button className="btn-card w-100" onClick={callbackClick}>
              Ver novedad
            </Button>
        </Row>
      </Card>
    </Col>
  );
};

export default NewCard;
