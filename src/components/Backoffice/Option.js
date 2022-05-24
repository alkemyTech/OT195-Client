import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Option = (props) => {
  const { option } = props;
  const { title, image} = option;
  const navigate = useNavigate();

  const navAction = (param)=>{
    navigate(`:${param}`)
  }
  return (
    <Col
      xxl={3}
      md={4}
      sm={5}
      className="d-flex flex-column align-items-center"
    >
      <Card className="bo-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img src={image} />
          <Button className="bo-button" variant="success" onClick={()=>{navAction(title)}}>
            Ir
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Option;
