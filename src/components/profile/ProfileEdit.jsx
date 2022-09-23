import React from "react";

import {Container, Row, Col, Image} from 'react-bootstrap'
import style from "./css/Profile.module.css"
import foto from "../register/imagen/manos10.jpg"
import ProfileForm from "../Forms/ProfileForm";
//
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function ProfileEdit({userData, setEditView}){
    const navigate = useNavigate();
    console.log(userData);

    // funcion para modificar los datos del usuario
  function formMethod(values){
    Swal.fire({
      title: "¿Deseas guardar los cambios?",
      showCancelButton: true,
      type: "question",
      confirmButtonText: "Guardar",
      cancelButtonText: `Cancelar`,
    }).then(async (result) => {
      // console.log(result)
      if (result.value) { // si es ok , se va a proceder a cambiar los datos del usuario
        try {
            console.log(values)

          const response = await fetch(
            process.env.REACT_APP_USERS_ENDPOINT  + userData.id,
            {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": window.localStorage.getItem("token"),
              },
              body: JSON.stringify(values),
            }
          );

          const data = await response.json();
          console.log(data)

          // If everything is ok, then I continue
          if (!data.ok) {
            return Swal.fire({
              title: "Error!",
              text: "Hubo un error al editar tu usuario!",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }

          navigate("/") // vuelvo al home
          return Swal.fire({
            title: "usuario editado!",
            type: "success",
            confirmButtonText: "Continuar",
          });
        } catch (error) {
          console.log(error);
          return Swal.fire({
            title: "Error!",
            text: "Hubo un error al editar el usuario",
            type: "error",
            confirmButtonText: "Continuar",
          });
        }
      }
    });
  }

    return(
            <div>
                <Container fluid >
                <Row style={{minHeight: "810px"}}>
                    <Col xxl={6} className="d-flex flex-column justify-content-center">
                    <Container>
                        <Row className="my-5">
                            <Col xxl={7} className="register-wrapper">
                            <h3>Edita tu  perfil</h3>
                            <ProfileForm setEditView={setEditView} userData={userData} formMethod={formMethod}></ProfileForm>
                            </Col>
                        </Row>
                    </Container>
                    </Col>
                    <Col xxl={6}>
                    <Image className={style.image} src={foto}></Image>
                    </Col>
                </Row>
            </Container>
            </div>
    )

}