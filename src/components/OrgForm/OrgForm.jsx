import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from "./OrgForm.module.css";

import {AdminContext} from "../../contexts/adminContext";
import useFetch from '../../hooks/useFetch';

import Loader from '../Loader/Loader';

import organization from "../../images/backoffice/organization.png";
import EditContainer from './EditContainer';

const OrgForm = () => {
    const { data: publicInfo, loading } = useFetch(process.env.REACT_APP_PUBLIC_ENDPOINT);

    const {setOrganizationData} = useContext(AdminContext)
    const navigate = useNavigate()

    async function saveChanges(){
        const imageRequest = new FormData();
        imageRequest.append("image", publicInfo.results.image);

        await fetch(
            process.env.REACT_APP_UPLOADS_ENDPOINT +
                "public/1",
            {
                method: "PUT",
                headers: {
                "X-Api-Key": window.localStorage.getItem("token"),
                },
                body: imageRequest,
            }
        );

        var myHeaders = new Headers();
        myHeaders.append("x-api-key", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": publicInfo.results.name
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(process.env.REACT_APP_PUBLIC_ENDPOINT, requestOptions)
        .then(response => response.json())
        .then(() => {
            navigate("/")
        })
        .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        setOrganizationData(publicInfo)
    },[publicInfo,loading, setOrganizationData])

    if(loading){
        return <Loader/>;
    }else{

        return (
            <main className={Styles.main} >
                <img src={organization} alt="organization icon" className={Styles.icon}/>
                <h1>Organización</h1>
                
                <p>Modificá el nombre y logo de la organización</p>
                <form className={Styles.formContainer} onSubmit={(e)=>{
                    e.preventDefault()
                    saveChanges()
                }}>
                    <EditContainer/>
                    <button className={Styles.saveChanges} type="submit">Guardar cambios</button>
                </form>
            </main>
        )
    }
}
export default OrgForm;