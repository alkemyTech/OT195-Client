import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from "./OrgForm.module.css";

import {AdminContext} from "../../contexts/adminContext";
import useFetch from '../../hooks/useFetch';

import Loader from '../Loader/Loader';
import Header from "../Backoffice/Header";

import organization from "../../images/backoffice/organization.png";


import WelcomeContainer from './WelcomeContainer';

const OrgForm = () => {
    const {activitiesData, welcomeData} = useContext(AdminContext)
    const navigate = useNavigate()
    const { data: publicInfo, loading } = useFetch('http://127.0.0.1:3001/organizations/1/public');

    function saveChanges(){
        console.log(activitiesData)
        console.log(welcomeData)
        navigate("/")
        /* save changes on db */
    }

    if(loading){
        return <Loader/>;
    }else{
        
        return (
            <main className={Styles.main}>
    
                <img src={organization} className={Styles.icon}/>
                <h1>Organización</h1>
                
                <p>Modificá el nombre y logo de la organización</p>
                <div className={Styles.formContainer}>

                    <WelcomeContainer/>
                    <button className={Styles.saveChange} onClick={saveChanges}>Guardar Cambios</button>
                </div>
            
            </main>
        )
    }
    
}

export default OrgForm;