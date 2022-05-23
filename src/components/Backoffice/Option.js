import { Card, Col, Button } from "react-bootstrap";

const Option = (props) => {
  const { option } = props;

  const { title, image } = option;

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
          <Button variant="success">Ir</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Option;
