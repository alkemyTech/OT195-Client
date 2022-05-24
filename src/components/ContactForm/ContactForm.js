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
    <Container fluid style={{marginBottom:'40px'}}>
        <Row className='row_contact'>
        <Col>
            <TextContact/>
        </Col>

         <Col className='inputs'>
              
                <h1 style={{marginBottom:'30px'}}>¡Contactate con nosotros!</h1>
            
                    
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
                    placeholder="Escribe tu consulta:"
                    name="message"
                    rows={8}
                    cols={40}
                    style={{marginBotton:'10px', marginLeft:'30px'}}
                >
                 </textarea>
                 <div className='button_contact'>
                 <Button 
                    type="submit"
                    variant="danger">
                   
                         Enviar consulta
                </Button>
                </div>
                 
                          
                </Form>
            </Formik>
         </Col>
        </Row>
    </Container>
    </>
)


}

export default ContactForm