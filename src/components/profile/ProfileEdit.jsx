import React from "react";

import {Container, Row, Col, Image} from 'react-bootstrap'
import style from "./css/Profile.module.css"
import foto from "../register/imagen/manos10.jpg"
import ProfileForm from "../Forms/ProfileForm";

export default function ProfileEdit({userData, setEditView}){
    return(
            <div>
                <Container fluid >
                <Row style={{minHeight: "810px"}}>
                    <Col xxl={6} className="d-flex flex-column justify-content-center">
                    <Container>
                        <Row className="my-5">
                            <Col xxl={7} className="register-wrapper">
                            <h3>Edita tu  perfil</h3>
                            <ProfileForm setEditView={setEditView} userData={userData}></ProfileForm>
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