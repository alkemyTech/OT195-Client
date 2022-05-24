import React from "react";

import {Container, Row, Col, Image} from 'react-bootstrap'
import style from "./css/Profile.module.css"

import foto from "../register/imagen/manos10.jpg"


export default function Profile(){
    return(
        <div>
            <Container fluid >
            <Row style={{minHeight: "810px"}}>
                <Col xxl={6} className="d-flex flex-column justify-content-center">
                <Container>
                    <Row className="my-5">
                        <Col xxl={7} className="register-wrapper">
                        <h3>Mi perfil</h3>
                        <br />
                        <div>
                            <label htmlFor="firstName" className="formLabel" >Nombre</label>
                            <input
                             className="formInput"
                             type="text"
                             id="firstName"
                             name="firstName"
                             value="EjemploNombre" 
                             readOnly 
                             />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="lastName" className="formLabel" >Apellido </label>
                            <input
                              className="formInput" 
                              type="text"
                              id="lastName"
                              name="lastName"
                              value="EjemploApellido" 
                              readOnly 
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="email" className="formLabel" >Email </label>
                            <input 
                              className="formInput"
                              type="email"
                              id="email"
                              name="email"
                              value="EjemploEmail" 
                              readOnly 
                             />
                        </div>
                        <button className={style.buttonDelete} >Eleminar cuenta</button> 
                        <button className={style.buttonEdit} >Editar Datos</button>
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