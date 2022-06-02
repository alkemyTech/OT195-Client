import { Container, Navbar } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

const Header = () => {
  const { data, loading } = useFetch(process.env.REACT_APP_PUBLIC_ENDPOINT);

  if (loading) return <p>Loading</p>;

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
          <img
            alt=""
            src={data.results.image}
            width="100"
            height="53"
            style={{ objectFit: "cover" }}
          ></img>
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default Header;
