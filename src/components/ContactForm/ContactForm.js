import React from 'react';

//Librerías
import { Formik, Form } from 'formik';
import {Button, Container, Row, Col} from 'react-bootstrap'
import * as Yup from "yup";

//Componentes
import TextField from '../LoginForm/TextField'
import TextContact from './TextContact';
import TextArea from './TextArea';

//Css
import '../ContactForm/Contact.css'


const ContactForm = ()=>{

    const handleSubmit = async(values) => {

        try {
            const response = await fetch(process.env.REACT_APP_CONTACT_ENDPOINT, {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
                "X-Api-Key": window.localStorage.getItem("token"),
              },
              body: JSON.stringify(values),
            });
      
            const data = await response.json();
            if (!data.ok) throw new Error(data.msg);
        } catch (err) {
            throw new Error(err.message);
        }
    }
    

return(
<>
    <Container fluid style={{marginBottom:'40px'}}>
        <Row className='row_contact'>
            <Col>
                <TextContact/>
            </Col>

            <Col className='inputs'>
                
                <h1 style={{margin:'30px 0'}}>¡Contactate con nosotros!</h1>
                    
                <Formik
                    initialValues={{ name:"", email: "", phone:"",  message:"" }}
                    onSubmit={(values) =>{
                            handleSubmit(values);
                    } 
                    }
                    validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Por favor, complete su apellido y nombre"),
                    email: Yup.string()
                        .required("Por favor, complete su dirección de correo electrónico")
                        .email("Ingrese un email válido."),
                    phone: Yup.string()
                        .required("Por favor, complete su número de teléfono"),
                    message: Yup.string()
                        .required('Recuerde completar su consulta')
                    })}
                >
                    <Form>
                    
                    <TextField
                        label="Nombre y apellido:"
                        name="name"
                        type="text"
                    ></TextField>
                    <TextField
                        label="Correo electrónico:"
                        name="email"
                        type="email"
                    ></TextField>
                    <TextField
                        label="Número de teléfono:"
                        name="phone"
                        type="string"
                    ></TextField>
                    <TextArea
                    label='Escribe tu consulta'
                    name='message'
                    rows={8}
                    ></TextArea>
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