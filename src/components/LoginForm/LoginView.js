import React from "react";

//Librerías

import { Container, Row, Col, Image } from "react-bootstrap";

//Css
import "./LoginForm.css";

//Imágenes
import img_manos from "../../images/img_manos.png";
import LoginForm from "../Forms/LoginForm";
import { Link } from "react-router-dom";

const LoginView = () => {
  return (
    <Container fluid className="loginView-container">
      <Row className="loginView-container">
        <Col className="d-flex align-items-center mt-3 mb-3">
          <Container>
            <Row>
              <Col xs={12} sm={7} className="m-auto">
                <h3 className="loginForm__welcome">Bienvenido</h3>
                <h2 className="loginForm__title mb-3">
                  Inicia sesión en tu cuenta!
                </h2>
              </Col>
              <Col
                xs={12}
                sm={7}
                className="m-auto loginForm__container"
                style={{ padding: "0" }}
              >
                <LoginForm></LoginForm>
              </Col>
              <Col xs={12} sm={7} className="registerText m-auto mt-3">
                <p>
                  No tienes una cuenta? <Link to="/signup">Registrate</Link>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          xs={12}
          sm={5}
          className="d-flex justify-content-end"
          style={{ padding: "0" }}
        >
          <Image className="img_manos" src={img_manos}></Image>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginView;
