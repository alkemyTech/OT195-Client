import React from "react";
import { Formik } from "formik";
import useFetch  from "../../hooks/useFetch";
import Header from "../Header";

import foto from "../register/imagen/Foto3.jpg"
import style from "../register/css/Register.module.css"


export default function Register(){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; 
    const regexString = /[A-Z]+$/i  ; 

    return(
        <div  >
            <Header/>
            <img className={style.imagen} src={foto}  alt="imagen.." /> 
            <h1 className={style.welcome} >Bienvenido</h1>
            <h1 className={style.create} >Crea tu usuario!</h1>
            <Formik
              initialValues={{
                   firstName:"",
                   lastName:"",
                   email:"",
                   password:"",
                  }}
              validate={(values)=>{
                const errors = {};
                  if(!values.firstName  ){
                      errors.firstName = "ingresa tu nombre";
                  }else if( !regexString.test(values.firstName) ){
                      errors.firstName = "solo tiene que ser letras y sin espacios"
                  }
                  if(!values.lastName){
                      errors.lastName = "ingresa tu apellido";
                  } else if(!regexString.test(values.lastName) ){
                      errors.lastName = "solo tiene que ser letras y sin espacios"
                  }
                  if(!values.email){
                      errors.email = "Ingresa tu email";
                  }else if(!regexEmail.test(values.email)){
                      errors.email = "el formato de email es incorrecto "
                  }
                  if(!values.password){
                      errors.password = "ingresa tu contraseña"
                  } else if(values.password.length < 6 ){
                      errors.password = " la contraseña debe tener al menos 6 caracteres"
                  }
                  return errors
              }}
              onSubmit={(event) =>{

                let requestOptions = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(event),
                    redirect: 'follow'
                };

                fetch("http://127.0.0.1:3001/auth/register", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
                
            
            }}
            >
                {( {values,errors , handleChange, handleBlur, handleSubmit } )=>(
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName" className={style.name} >Nombre</label>
                            <input
                             className={style.inputName}
                             type="text"
                             id="firstName"
                             name="firstName"
                             value={values.firstName}
                             onChange={handleChange}
                             placeholder="Nombre"
                            />
                        </div>
                        { errors.firstName && <p className={style.errorName} >{errors.firstName}</p>}
                        <div>
                            <label htmlFor="lastName" className={style.lastName} >Apellido </label>
                            <input
                              className={style.inputLastName} 
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur} // cuando clikeo afuera del input valida el campo
                              placeholder="Apellido" 
                            />
                        </div>
                        { errors.lastName && <p className={style.errorLastName} >{errors.lastName}</p>}
                        <div>
                            <label htmlFor="email" className={style.email} >Email </label>
                            <input 
                              className={style.inputEmail}
                              type="email"
                              id="email"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              placeholder="Email"
                             />
                        </div>
                        { errors.email && <p className={style.errorEmail} >{errors.email}</p>}
                        <div>
                            <label htmlFor="password" className={style.password} >Contraseña </label>
                            <input
                              className={style.inputPassword}
                              type="password"
                              id="password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              placeholder="Contraseña"
                            />
                        </div>
                        { errors.password && <p className={style.errorPassword} >{errors.password}</p>}
                        <button type="submit" className={style.buttonCreate} >Crear usuario</button>
                    </form>
                ) }
            </Formik>
            {/* <h1>Hola</h1> */}
        </div>
        
    )
}