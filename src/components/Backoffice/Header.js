import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Container
      fluid
      className="bo-header d-flex flex-column justify-content-center"
    >
      <Navbar className="justify-content-between">
        <Navbar.Toggle
          style={{ display: "block" }}
          aria-controls="basic-navbar-nav"
        ></Navbar.Toggle>
        <Navbar.Brand>
          <img alt="" src="" width="100" height="53"></img>
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default Header;
