import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

//Librerías
import { Formik, Form } from 'formik';
import {Button, Container} from 'react-bootstrap'
import * as Yup from "yup";

//Componentes
import Loader from '../Loader/Loader'
import TextField from './TextField'
import TextContact from './TextContact';
import TextArea from './TextArea';

// Alerts
import { useAlert } from "../../contexts/alertContext";

//Css
import '../ContactForm/Contact.css'


const ContactForm = () => {

    const navigate = useNavigate();

    const { showSuccessAlert, showErrorAlert, show} = useAlert();

    const [loading, setLoading] = useState(false);
    const [send, setSend] = useState(false);

    const handleSubmit = async(values) => {
        setLoading(true);
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

            if (!data.ok) {
                showErrorAlert(data.msg, "Error")
            } else {
                showSuccessAlert(data.msg, "Success!")
            }
        } catch (err) {
            showErrorAlert('An error has ocurred. Please try again later', "Error")
        }
        setLoading(false)
        setSend(true)
    }
    useEffect(() => {
        if(!show && send) {
            navigate('/')
        }
    })

    if(loading) {
        return (
            <Loader />
        )
    }

    return(
    <>
        <Container fluid style={{marginBottom:'40px'}}>
            <div className='row_contact'>

                    <TextContact/>

                <div className='inputs'>
                    
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
                </div>
            </div>
        </Container>
        </>
    )


}

export default ContactForm