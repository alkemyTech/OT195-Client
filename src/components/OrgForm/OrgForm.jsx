import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from "./OrgForm.module.css";

import {AdminContext} from "../../contexts/adminContext";
import useFetch from '../../hooks/useFetch';

import Loader from '../Loader/Loader';

import organization from "../../images/backoffice/organization.png";
import EditContainer from './EditContainer';

const OrgForm = () => {
    const { data: publicInfo, loading } = useFetch('http://127.0.0.1:3001/organizations/1/public');

    const {setOrganizationData} = useContext(AdminContext)
    const navigate = useNavigate()

    function saveChanges(){
        navigate("/")
        /* save changes on db */
    }
    useEffect(()=>{
        setOrganizationData(publicInfo)
    },[publicInfo,loading, setOrganizationData])

    if(loading){
        return <Loader/>;
    }else{

        return (
            <main className={Styles.main}>
                <img src={organization} alt="organization icon" className={Styles.icon}/>
                <h1>Organización</h1>
                
                <p>Modificá el nombre y logo de la organización</p>
                <div className={Styles.formContainer}>
                    <EditContainer/>
                    <button className={Styles.saveChanges} onClick={saveChanges}>Guardar cambios</button>
                </div>
            </main>
        )
    }
}

export default OrgForm;