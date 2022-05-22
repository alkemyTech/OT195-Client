import React from "react";

//Librerías

import { Formik, Form } from "formik";
import { Button, Container, Col, Row, Image } from "react-bootstrap";
import {
  setLoginPending,
  setLoginFulfilled,
  setLoginRejected,
} from "../../features/actions/loginActions";
import * as Yup from "yup";

//Componentes
import TextField from "./TextField";

//Css
import "./LoginForm.css";

//Imágenes
import img_manos from "../../images/img_manos.png";
import { useDispatch, useSelector } from "react-redux";

const loginDispatch = (values) => async (dispatch) => {
  const endpoint = "http://localhost:3005/auth/login";
  //   const endpoint = "http://localhost:3001";

  dispatch(setLoginPending());

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    if (!data.ok) throw new Error(data.msg);
    return dispatch(setLoginFulfilled(data.results));
  } catch (err) {
    return dispatch(
      setLoginRejected({ msg: err.msg || err.message, code: err.code })
    );
  }
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(({ user }) => user.error);

  return (
    <Container>
      <Row className="rowLogin">
        <Col>
          <h4 style={{ marginLeft: "30px" }}>Bienvenido</h4>
          <h2 style={{ marginLeft: "30px" }}>Inicia sesión en tu cuenta!</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { resetForm }) => {
              dispatch(loginDispatch(values));
            }}
            // validationSchema={Yup.object({
            //   email: Yup.string()
            //     .required(
            //       "Por favor, complete su dirección de correo electrónico"
            //     )
            //     .email("Ingrese un email válido."),
            //   password: Yup.string()
            //     .required("La contraseña es obligatoria")
            //     .min(6, "La contraseña debe tener al menos 6 caracteres"),
            // })}
          >
            <Form className="form_login">
              <TextField
                name="email"
                type="text"
                placeholder="Email"
              ></TextField>
              <TextField
                name="password"
                type="text"
                placeholder="Contraseña"
                min="6"
              ></TextField>
              <Button
                style={{ marginLeft: "30px" }}
                type="submit"
                variant="danger"
              >
                Iniciar sesión
              </Button>
            </Form>
          </Formik>
          <p>{error?.msg}</p>
        </Col>
        <Col className="col_img">
          <Image className="img_manos" src={img_manos}></Image>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginForm;
