import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from "./OrgForm.module.css";

import {AdminContext} from "../../contexts/adminContext";
import useFetch from '../../hooks/useFetch';

import Loader from '../Loader/Loader';
import Header from "../Backoffice/Header";

import documents from "../../images/backoffice/documents.png";

import WelcomeContainer from './WelcomeContainer';
import ActivitiesContainer from './ActivitiesContainer';

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
            <>
            <Header/>
            <main className={Styles.main}>
    
                <img src={documents} className={Styles.icon}/>
                <h1>Slides</h1>
                
                <p>Modificá la bienvenida y los slides desplegados en el org</p>
                <div className={Styles.formContainer}>

                    <WelcomeContainer/>
                    <ActivitiesContainer/>

                    <button className={Styles.saveChange} onClick={saveChanges}>Guardar Cambios</button>
                </div>
            
            </main>
            
            </>
            
        )
    }
    
}

export default OrgForm;