import React ,{} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/actions/loginActions"; // funcion creada que importo para salir de la sesion

import {Container, Row, Col, Image} from 'react-bootstrap'
import Swal from "sweetalert2";
import style from "./css/Profile.module.css"

import foto from "../register/imagen/manos10.jpg"
import Button from "../Button";


export default function  ProfileView({userData , setEditView }){
    const dispatch = useDispatch()
    const navigate = useNavigate();


    function deleteUser(values){ // funcion para eleminar el usuario
        Swal.fire({ // esto es el alert pero utilizando Swal.fire
          title: "Confirmar eliminación", // el texto que quiero que muestre como titulo
          type: "warning",
          text: "¿Estás seguro que deseas eliminar tu usuario?", //el texto que quiero que muestre
          showCancelButton: true,
          cancelButtonText: "Cancelar", // muestro un texto en el button para cancel
          reverseButtons: true, // cambio el sentido que va a mostrar los botones de "cancelar" y de "ok"
          confirmButtonText: "Si" // muestro un texto en el button para confirm
        }).then(async (result) => {
          if (result.value) { // si acepto se va a aproceder a elemiar el usario
            // console.log(values);
            try {
              const response = await fetch(
                process.env.REACT_APP_USERS_ENDPOINT   + values.id,
                {
                  method: "DELETE",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-Api-Key": window.localStorage.getItem("token"),
                  },
                }
              );
    
              const data = await response.json();
    
              if (!data.ok) { // esto se muestra si data.ok = false
                return Swal.fire({
                  title: "Error!",
                  text: "Hubo un error al eliminar el usuario.",
                  type: "error",
                  confirmButtonText: "Continuar",
                });
              }

              navigate("/") // vuelvo al home
              dispatch(logOut()) // cerrar la sesion

              return Swal.fire({
                title: "Usuario eliminado!",
                type: "success",
                confirmButtonText: "Continuar",
              });
            } catch (err) {
              console.log(err)
              return Swal.fire({
                title: "Error!",
                text: "Hubo un error al eliminar el usuario.",
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
                        <h3>Mi perfil</h3>
                        <Container className="my-3" fluid>
                            <Row style={{fontWeight: "bold"}}>
                                <Col><p>Nombre</p></Col>
                                <Col><p>Apellido</p></Col>
                                <Col><p>Email</p></Col>
                            </Row>
                            <Row>
                                <Col><p>{userData.firstName}</p></Col>
                                <Col><p>{userData.lastName}</p></Col>
                                <Col><p>{userData.email}</p></Col>
                            </Row>
                        </Container>

                        <Button callbackClick={() => setEditView(true)} styles="secondary" style= {{ marginLeft:"15%" }} >Editar</Button>
                        <Button styles="primary" callbackClick={() => deleteUser(userData) }  style= {{ marginLeft:"10%" }}   >Eliminar</Button> 
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