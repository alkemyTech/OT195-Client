import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="bo-header">
      <Navbar>
        <Navbar.Collapse>
          <Navbar.Toggle>a</Navbar.Toggle>
        </Navbar.Collapse>
        <Navbar.Brand>
          <img alt="" src="" width="100" height="53"></img>
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default Header;
