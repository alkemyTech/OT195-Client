import { Card, Col, Image, Row } from "react-bootstrap";
import imagePlaceholder from "../../images/backoffice/user.png";


// TestimonyCard se utiliza en homePage.js , lo utiliza en CardListTestimny.js que cree
const TestimonyCard = (props) => {
  const { cardData } = props;
  console.log(cardData)

  const { name, content, image } = cardData;

  return (
    <Col className="mb-3 card-container">
      <Card className="testimonyCard_container">
        <Row className="mx-2 my-4 ">
          <Col xs={12}>
            <Image
              roundedCircle
              style={{ width: "75px" }}
              src={image ? image : imagePlaceholder} // si no hay nada en image va a mostrar una imagen por defecto
              alt="user"
              className="mb-2"
            ></Image>
          </Col>
          <Col xs={12} className="mb-2">
            <h2 className="m-0">{name}</h2>
          </Col>
          <Col xs={12}>
            <div  dangerouslySetInnerHTML={{ __html: content }}/>
            {/* <p className="m-0 testimonyQuote">{content.replace(/<[^>]*>?/g, '')}</p >  */}
          </Col> 
        </Row>
      </Card>
    </Col>
  );
};

export default TestimonyCard;
