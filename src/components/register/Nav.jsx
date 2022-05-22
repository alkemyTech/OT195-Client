import React from "react";

import style from "../register/css/Nav.module.css"
import logo from "../register/imagen/LOGO.png"



export default function Nav(){
    return(
        <div className={style.nav} >
                <img src={logo} alt="logo..." className={style.logo} width="90px" />
            <nav>
                <div className={style.list} >
                    {/* <button className={style.buttonLog} >Log in</button> */}
                    <h1>hola</h1>
                </div>
            </nav>
        </div>
    )
}