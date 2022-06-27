import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from "./HomeForm.module.css";
import {AdminContext} from "../../contexts/adminContext";
import documents from "../../images/backoffice/documents.png";
import WelcomeContainer from './WelcomeContainer';

const HomeForm = () => {
    const {welcomeData} = useContext(AdminContext)
    const navigate = useNavigate()

    async function saveChanges(){
        if(welcomeData.image !== ""){
            const imageRequest = new FormData();
            imageRequest.append("image", welcomeData.image);
            console.log(welcomeData)

            await fetch(
                process.env.REACT_APP_UPLOADS_ENDPOINT +
                    "welcome/1",
                {
                    method: "PUT",
                    headers: {
                    "X-Api-Key": window.localStorage.getItem("token"),
                    },
                    body: imageRequest,
                }
            );
        }
        

        
        var myHeaders = new Headers();
        myHeaders.append("x-api-key", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "welcomeTitle": welcomeData.title,
            "welcomeText": welcomeData.text
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


    return (
        <>
            <main className={Styles.main}>
    
                <img src={documents} alt="Slides" className={Styles.icon}/>
                <h1>Bienvenida</h1>
                
                <p>Modificá la bienvenida desplegada en el Home</p>
                <div className={Styles.formContainer}>

                    <WelcomeContainer/>

                    <button className={Styles.saveChanges} onClick={saveChanges}>Guardar Cambios</button>
                </div>
            
            </main>
        </>
    )
    
}

export default HomeForm;