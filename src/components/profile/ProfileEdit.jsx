import React from "react";
import { Formik } from "formik";

import {Container, Row, Col, Image} from 'react-bootstrap'
import style from "./css/Profile.module.css"
import foto from "../register/imagen/manos10.jpg"

export default function ProfileEdit( {data , setData}){

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexString = /[A-Z]+$/i  ;

    return(
            <div>
                <Container fluid >
                <Row style={{minHeight: "810px"}}>
                    <Col xxl={6} className="d-flex flex-column justify-content-center">
                    <Container>
                        <Row className="my-5">
                            <Col xxl={7} className="register-wrapper">
                            <h3>Edita tu  perfil</h3>
                            <br />
                            <Formik
              initialValues={{
                   firstName:"",
                   lastName:"",
                   email:"",
                   password:"",
                  }}
              validate={(values)=>{
                const errors = {};
                  if( values.firstName.length > 0 && !regexString.test(values.firstName) ){
                      errors.firstName = "solo tiene que ser letras y sin espacios"
                  }
                  if(values.lastName.length >0 && !regexString.test(values.lastName) ){
                      errors.lastName = "solo tiene que ser letras y sin espacios"
                  }
                  if(values.email.length > 0 && !regexEmail.test(values.email)){
                      errors.email = "el formato de email es incorrecto "
                  }
                  return errors
              }}
              onSubmit={(event) =>{
                setData(false)
                alert("se guardaron los cambios")
              }}
            >
                {( {values,errors , handleChange, handleBlur, handleSubmit } )=>(
                    <form onSubmit={handleSubmit}>
                        {console.log(errors)}
                        <div>
                            <label htmlFor="firstName" className="formLabel" >Nombre</label>
                            <input
                             className="formInput"
                             type="text"
                             id="firstName"
                             name="firstName"
                             value={values.firstName}
                             onChange={handleChange}
                             placeholder="Nombre"
                            />
                        </div>
                        { errors.firstName && <p className="errorLabel" >{errors.firstName}</p>}
                        <div>
                            <label htmlFor="lastName" className="formLabel" >Apellido </label>
                            <input
                              className="formInput" 
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur} // cuando clikeo afuera del input valida el campo
                              placeholder="Apellido" 
                            />
                        </div>
                        { errors.lastName && <p className="errorLabel" >{errors.lastName}</p>}
                        <div>
                            <label htmlFor="email" className="formLabel" >Email </label>
                            <input 
                              className="formInput"
                              type="email"
                              id="email"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              placeholder="Email"
                             />
                        </div>
                        { errors.email && <p className="errorLabel">{errors.email}</p>}
                        <button className={style.buttonSave} type="submit"  >Guardar  cambios</button>
                    </form>
                ) }
            </Formik>
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