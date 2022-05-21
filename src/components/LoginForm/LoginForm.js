import React from 'react';

//Librerías

import {Formik, Form} from 'formik';
import {Button, Container, Col, Row, Image} from 'react-bootstrap'
import * as Yup from "yup";

//Componentes
import TextField from './TextField'

//Css
import './LoginForm.css'

//Imágenes
import img_manos from '../../images/img_manos.png'



const LoginForm = () =>{


    return(

    <Container>
        <Row className="rowLogin">
            <Col>
            <h4 style={{marginLeft: '30px'}}>Bienvenido</h4>
            <h2 style={{marginLeft: '30px'}}>Inicia sesión en tu cuenta!</h2>
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, actions) =>{
            actions.resetForm({
                values:{
                    email:'',
                    password:'',
                }
            })
           } 
            }
            validationSchema={Yup.object({
            email: Yup.string()
                .required("Por favor, complete su dirección de correo electrónico")
                .email("Ingrese un email válido."),
            password: Yup.string()
                .required("La contraseña es obligatoria")
                .min(6, "La contraseña debe tener al menos 6 caracteres")
            })}
        >
        <Form className='form_login'>
            
        <TextField
            name="email"
            type="email"
            placeholder="Email"
        ></TextField>
        <TextField
            name="password"
            type="password"
            placeholder="Contraseña"
            min='6'
        ></TextField>
        <Button style={{marginLeft: '30px'}}
            type="submit"
            variant="danger"
        >
            Iniciar sesión
        </Button>
        </Form>
    </Formik>
    </Col>
    <Col className='col_img'>
            <Image className='img_manos' src={img_manos}>

            </Image>
    </Col>
    </Row>
    
    </Container>
    )
}
export default LoginForm