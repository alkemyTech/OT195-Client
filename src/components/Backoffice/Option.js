import { Card, Button } from "react-bootstrap";

const Option = (props) => {
  const { title, image, action } = props;

  return (
    <Card className="bo-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Img>{image}</Card.Img> */}
        <Button variant="success">Ir</Button>
      </Card.Body>
    </Card>
  );
};

export default Option;
