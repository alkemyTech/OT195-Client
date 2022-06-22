import { Container, Navbar } from "react-bootstrap";
import NavbarOffcanvas from "../Offcanvas/Offcanvas";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import NavMenu from "../Header/NavMenu";

const Header = () => {
  const { data, loading } = useFetch(process.env.REACT_APP_PUBLIC_ENDPOINT);
  const [expandOcanvas, setExpandOcanvas] = useState(false);

  if (loading) return <p>Loading</p>;

  return (
    <Container
      fluid
      className="bo-header d-flex flex-column justify-content-center"
    >
      <Navbar className="justify-content-between">
        <NavbarOffcanvas
          title="Menu principal"
          toggleStyle="d-block"
          placement="start"
          expand={expandOcanvas}
          setExpand={setExpandOcanvas}
        >
          <NavMenu menu={data?.results.nav} buttonStyles="my-2"></NavMenu>
        </NavbarOffcanvas>
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
