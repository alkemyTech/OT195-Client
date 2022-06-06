import React from 'react';

//Librerías
import { Formik, Form, Field } from 'formik';
import {Button, Container, Row, Col} from 'react-bootstrap'
import * as Yup from "yup";

//Componentes
import TextField from '../LoginForm/TextField'
import TextContact from './TextContact';
import TextArea from "../LoginForm/TextArea"

//Css
import '../ContactForm/Contact.css'


const ContactForm = ()=>{



return(
<>
    <Container fluid style={{marginBottom:'40px'}}>
        <Row className='row_contact'>
        <div className="col_text">
            <TextContact/>
        </div>

         <div className='inputs'>
              
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

                        alert()
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

                {/* <Field name="message" as={<TextArea/>}/> */}
                <Field as={TextArea}/>

                 <div className='button_contact'>
                 <Button 
                    type="submit"
                    variant="danger">
                        Enviar consulta
                </Button>
                </div>
                 
                          
                </Form>
            </Formik>
         </div>
        </Row>
    </Container>
    </>
)


}

export default ContactForm