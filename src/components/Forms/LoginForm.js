import * as Bootstrap from "react-bootstrap";
import { Formik, Form } from "formik";
import TextField from "../Forms/TextField";
import Button from "../Button";
import Select from "./Select";

import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";

// Async dispatch action for reducers
import {
  setLoginPending,
  setLoginFulfilled,
  setLoginRejected,
} from "../../features/actions/loginActions";

const loginDispatch = (values, resetForm) => async (dispatch) => {
  // Update the "loading" state to "pending" on the application store;
  dispatch(setLoginPending());

  try {
    // Try to fetch the server endpoint
    const response = await fetch(process.env.REACT_APP_LOGIN_ENDPOINT, {
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
    <Bootstrap.Container fluid>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          dispatch(loginDispatch(values, resetForm));
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Por favor, complete su dirección de correo electrónico")
            .email("Ingrese un email válido."),
          // password: Yup.string()
          //   .required("La contraseña es obligatoria")
          //   .min(6, "La contraseña debe tener al menos 6 caracteres"),
        })}
      >
        <Bootstrap.Form as={Form}>
          <TextField
            name="email"
            type="text"
            placeholder="Email"
            label="Email"
          ></TextField>
          <TextField
            name="password"
            type="password"
            label="Contraseña"
            placeholder="Contraseña"
            min="6"
          ></TextField>
          <Button styles="primary loginButton" type="submit">
            Inicia sesión
          </Button>
        </Bootstrap.Form>
      </Formik>
      <Bootstrap.Row>
        <Bootstrap.Col>
          <p>{user?.error.msg}</p>
        </Bootstrap.Col>
      </Bootstrap.Row>
    </Bootstrap.Container>
  );
};
export default LoginForm;
