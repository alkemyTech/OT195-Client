import React, {useContext} from 'react';
import Styles from "./HomeForm.module.css";
import {HFormContext} from "../../contexts/hFormContext";
import SlideContainer from './SlideContainer';
import documents from "../../images/backoffice/documents.png";
import Slider from '../Slider/Slider';


const HomeForm = () => {
    const {dbData, setDbData ,newData} = useContext(HFormContext)

    function handleSubmit(event){
        event.preventDefault();
        setDbData(newData)
    }

    return (
        <main className={Styles.main}>

            <img src={documents} className={Styles.icon}/>
            <h1>Slides</h1>
            
            <p>Modificá los slides de bienvenida desplegados en el Home</p>
            <form className={Styles.formContainer} onSubmit={(e)=>{handleSubmit(e)}}>
                {dbData.map((dbObject)=>{
                    return(
                            <SlideContainer key={dbObject.order} object={dbObject}/>
                        )
                })}

                <button className="optionButton">Guardar Cambios</button>
            </form>

            <Slider/>
        </main>
    )
}

export default HomeForm;