import { Button, Card, Col, Image, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import imagePlaceholder from "../../images/backoffice/user.png";

const NewCard = (props) => {
  //   const { data } = props;
  // const { image, content, id, name } = data;

  const name = "New Name";
  const description = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin
      risus cursus elementum sed massa cras sapien placerat. Diam integer congue
      id amet proin. Ullamcorper nibh sit vitae ac
    </p>
  );

  //   const navigate = useNavigate();

  //   const callbackClick = () => {
  //     return navigate("/novedades/" + id);
  //   };

  return (
    <Col className="mb-3" lg={5} sm={12}>
      <Card className="newCard_container card-container">
        <Row className="d-flex mx-2 my-3">
          <Col xs={6} className="my-auto">
            <Image src={imagePlaceholder} fluid rounded></Image>
          </Col>
          <Col xs={6} className="news-content">
            <p>{description}</p>
            <Button className="btn-card w-100">Ver novedad</Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default NewCard;
