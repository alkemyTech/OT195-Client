import React from 'react';

//Librerías
import { Formik, Form } from 'formik';
import {Button, Container, Row, Col} from 'react-bootstrap'
import * as Yup from "yup";

//Componentes
import TextField from '../LoginForm/TextField'
import TextContact from './TextContact';

//Css
import '../ContactForm/Contact.css'


const ContactForm = ()=>{

  
  
return(
<>
    <Container fluid>
        <Row className='row_contact'>
        <Col>
            <TextContact/>
        </Col>

         <Col>
              
                <h1 style={{marginLeft: '30px', marginBottom:'30px'}}>¡Contactate con nosotros!</h1>
            
                    
                <Formik
                    initialValues={{ fullname:"", email: "",  message:"" }}
                    onSubmit={(values, actions) =>{
                        actions.resetForm({
                            values:{
                                fullname:'',
                                email:'',
                                message:'',
                            }
                        })
                     
                       } 
                        }
                    validationSchema={Yup.object({
                    fullname: Yup.string()
                        .required("Por favor, complete su apellido y nombre"),
                    email: Yup.string()
                        .required("Por favor, complete su dirección de correo electrónico")
                        .email("Ingrese un email válido."),
                    message: Yup.string()
                        .required('Recuerde completar su consulta')
                    })}
                >
                <Form>
                <div className='inputs'>
                <TextField
                    label="Nombre y apellido:"
                    name="fullname"
                    type="text"
                  ></TextField>
                <TextField
                    label="Correo electrónico:"
                    name="email"
                    type="email"
                 ></TextField>
                <textarea
                    label="Escribe tu consulta:"
                    name="message"
                    rows={10}
                    cols={50}
                >
                 </textarea>
                 </div>

                <Button 
                    type="submit"
                    variant="danger"
                    
                >
                    Enviar consulta
                </Button>
                </Form>
            </Formik>
         </Col>
        </Row>
    </Container>
    </>
)


}

export default ContactForm