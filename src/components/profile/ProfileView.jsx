import React from "react";

import {Container, Row, Col, Image} from 'react-bootstrap'
import style from "./css/Profile.module.css"

import foto from "../register/imagen/manos10.jpg"
import Button from "../Button";


export default function  ProfileView({userData , setEditView }){
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

                        <Button callbackClick={() => setEditView(true)} styles="secondary" >Editar</Button>
                        <Button styles="primary" >Eliminar</Button> 
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