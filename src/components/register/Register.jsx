import React from "react";
import { Formik } from "formik";
import Nav from "./Nav";

import foto from "../register/imagen/Foto3.jpg"
// import logo from "../register/imagen/LOGO.png"
import style from "../register/css/Register.module.css"


export default function Register(){
    return(
        <div  >
            <Nav/>
            {/* <img src={logo} alt="logo" width="100px" className={style.logo} /> */}
            <img className={style.imagen} src={foto}  alt="imagen.." /> 
            <h1 className={style.welcome} >Bienvenido</h1>
            <h1 className={style.create} >Crea tu usuario!</h1>
            <Formik
              initialValues={{
                   firstName:"",
                   lastName:"",
                   email:"",
                   password:""
                  }} 
              onSubmit={(event) =>{
                  console.log(event)
              }}
            >
                {( {values, handleChange, handleBlur, handleSubmit } )=>(
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
                        <button type="submit" className={style.buttonCreate} >Crear usuario</button>
                    </form>
                ) }
            </Formik>
            {/* <h1>Hola</h1> */}
        </div>
    )
}