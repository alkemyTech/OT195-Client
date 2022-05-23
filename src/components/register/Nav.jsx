import React from "react";

import style from "../register/css/Nav.module.css"
import logo from "../register/imagen/LOGO.png"



export default function Nav(){
    return(
        <div className={style.nav} >
                <img src={logo} alt="logo..." className={style.logo} width="90px" />
            <nav>
                <div className={style.lista1} >
                <ul className={style.lista1}>
             <li>
                 <span>Inicio</span>
             </li>
             <li>
                 <span >Nosotros</span>
             </li>
             <li>
                 <span >Novedades</span>
             </li>
             <li>
                 <span >Testimonios</span>
             </li>
             <li>
                 <span >Contacto</span>
             </li>
             <li>
                 <span>Contribuye</span>
             </li>
             <li>
                 <button className={style.buttonLog} >Log in</button>
             </li>
             <li>
                 <button className={style.buttonRegis} >Registrate</button>
             </li>
         </ul>
                </div>
            </nav>
        </div>
    )
}