import React from "react";
import { Formik } from "formik";
import style from "../register/css/Register.module.css"


export default function Register(){
    return(
        <div>
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
                            <label htmlFor="lastName">Apellido </label>
                            <input 
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
                            <label htmlFor="email">Email </label>
                            <input 
                              type="email"
                              id="email"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              placeholder="Email"
                             />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña </label>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              placeholder="Contraseña"
                            />
                        </div>
                        <button type="submit">Crear usuario</button>
                    </form>
                ) }
            </Formik>
            {/* <h1>Hola</h1> */}
        </div>
    )
}