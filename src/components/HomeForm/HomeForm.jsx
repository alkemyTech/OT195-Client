import React, {useContext, useState, useEffect} from 'react';
import Styles from "./HomeForm.module.css";
import {HomeContext} from "../../contexts/homeContext";
import SlideContainer from './SlideContainer';
import documents from "../../images/backoffice/documents.png";
import Slider from '../Slider/Slider';
import Loader from '../Loader/Loader';
import useFetch from '../../hooks/useFetch';
import WelcomeContainer from './WelcomeContainer';
import Header from "../Backoffice/Header";


const HomeForm = () => {
    const {newData, dbData, setDbData} = useContext(HomeContext)
    const { data: publicInfo, loading } = useFetch('http://127.0.0.1:3001/organizations/1/public');

    function handleSubmit(event){
        event.preventDefault();
        setDbData(newData)
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
                
                <p>Modificá la bienvenida y los slides desplegados en el Home</p>
                <form className={Styles.formContainer} onSubmit={(e)=>{handleSubmit(e)}}>

                    <WelcomeContainer object={publicInfo}/>

                    {dbData.map((dbObject)=>{
                        return(
                                <SlideContainer key={dbObject.order} object={dbObject}/>
                            )
                    })}

                    <button className={Styles.saveChange}>Guardar Cambios</button>
                </form>
            </main>
            
            </>
            
        )
    }
    
}

export default HomeForm;