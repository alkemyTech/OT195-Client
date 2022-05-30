import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from "./HomeForm.module.css";

import {AdminContext} from "../../contexts/adminContext";
import documents from "../../images/backoffice/documents.png";
import WelcomeContainer from './WelcomeContainer';
import ActivitiesContainer from './ActivitiesContainer';

const HomeForm = () => {
    const {activitiesData, welcomeData} = useContext(AdminContext)
    const navigate = useNavigate()
    const { data: publicInfo, loading } = useFetch(process.env.REACT_APP_PUBLIC_ENDPOINT);

    function saveChanges(){
        console.log(activitiesData)
        console.log(welcomeData)
        navigate("/")
        /* save changes on db */
    }

    return (
        <>
            <main className={Styles.main}>
    
                <img src={documents} alt="Slides" className={Styles.icon}/>
                <h1>Slides</h1>
                
                <p>Modificá la bienvenida y los slides desplegados en el Home</p>
                <div className={Styles.formContainer}>

                    <WelcomeContainer/>
                    <ActivitiesContainer/>

                    <button className={Styles.saveChanges} onClick={saveChanges}>Guardar Cambios</button>
                </div>
            
            </main>
        </>
    )
    
}

export default HomeForm;