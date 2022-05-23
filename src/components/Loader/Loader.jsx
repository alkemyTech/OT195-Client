import React from 'react';
import { TailSpin } from "react-loader-spinner";
import Styles from "./Loader.module.css";

function Loader(){
    return(
        <div className={`${Styles.loaderContainer}`}>
            <TailSpin color="#00BFFF" height={80} width={80}/>
        </div>
    )
}

export default Loader;