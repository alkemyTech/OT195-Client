import React, { useEffect } from "react";

//Librerías

import { Formik, Form } from "formik";
import { Button, Container, Col, Row, Image } from "react-bootstrap";
import * as Yup from "yup";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

//Componentes
import TextField from "./TextField";

//Css
import "./LoginForm.css";

//Imágenes
import img_manos from "../../images/img_manos.png";
import { useDispatch, useSelector } from "react-redux";

// Async dispatch action for reducers
import {
  setLoginPending,
  setLoginFulfilled,
  setLoginRejected,
} from "../../features/actions/loginActions";

const loginDispatch = (values, resetForm) => async (dispatch) => {
  // Endpoint to the auth endpoint
  const endpoint = "http://127.0.0.1:3001/auth/login";
  
  // Update the "loading" state to "pending" on the application store;
  dispatch(setLoginPending());

  try {
    // Try to fetch the server endpoint
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Data is sent to the server as shown below
      // =============================
      //  {
      //    email: "",
      //    password: ""
      //  }
      
      body: JSON.stringify(values),
    });
    console.log(values)

    // If there was no error, we get the data from the response
    // Data is expected to be returned as shown below

    /*  Without errors: 
        ========================
        {
          results: {
            id: "",
            nombre: "",
            apellido: "",
            image: ""
          },
          ok: true
        }
     */

    /*  With errors: 
        ========================
        {
          msg: "",
          errcode?: ""
          ok: false
        }
     */

    const data = await response.json();

    // If the ok property is false, we throw a new error message
    // Expected the data to contain an "ok" property which may be 'true' or 'false'
    // Expected the data to contain an "msg" property which contains the error message

    // TODO: Display user friendly error messages

    if (!data.ok) throw new Error(data.msg);

    // TODO: resetForm();

    // If there was no error, we dispatch the results to the application store
    // Expected the data to contain an "results" property which contains the user information
    return dispatch(setLoginFulfilled(data.results));
  } catch (err) {
    // If there was an error, we dispatch the error to the application store
    // TODO: Should we store the error code too?

    return dispatch(setLoginRejected({ msg: err.message, code: "" }));
  }
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);

  const navigate = useNavigate();

  // Custom hook to listen the token
  const [token] = useLocalStorage("token");

  // TODO: Show a different view when ther already signed in
  useEffect(() => {
    // If the login was successful, store the token in the local storage and redirect to "/"
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Container>
      <Row className="rowLogin">
        <Col>
          <h4 style={{ marginLeft: "30px" }}>Bienvenido</h4>
          <h2 style={{ marginLeft: "30px" }}>Inicia sesión en tu cuenta!</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { resetForm }) => {
              dispatch(loginDispatch(values, resetForm));
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .required(
                  "Por favor, complete su dirección de correo electrónico"
                )
                .email("Ingrese un email válido."),
              password: Yup.string()
                .required("La contraseña es obligatoria")
                .min(6, "La contraseña debe tener al menos 6 caracteres"),
            })}
          >
            <Form className="form_login">
              <TextField
                name="email"
                type="text"
                placeholder="Email"
                disabled={user.loading === "pending" ? true : false}
              ></TextField>
              <TextField
                name="password"
                type="text"
                placeholder="Contraseña"
                min="6"
                disabled={user.loading === "pending" ? true : false}
              ></TextField>
              <Button
                style={{ marginLeft: "30px" }}
                type="submit"
                variant="danger"
                disabled={user.loading === "pending" ? true : false}
              >
                Iniciar sesión
              </Button>
            </Form>
          </Formik>
          <p>{user.error?.msg}</p>
        </Col>
        <Col className="col_img">
          <Image className="img_manos" src={img_manos}></Image>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginForm;
