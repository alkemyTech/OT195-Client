import React, {useState, useContext} from 'react'
import {HomeContext} from "../../contexts/homeContext";
import Styles from "./HomeForm.module.css";




const WelcomeContainer = ({object}) => {
    const {newData, setNewData, welcomeImage, setWelcomeImage} = useContext(HomeContext)
    const [title, setTitle] = useState(object.welcomeTitle)
    const [text, setText] = useState(object.welcomeText)

    return (
        <div className={Styles.editContainer}>
            <div className={Styles.viewContainer}>
                <h2 className={Styles.outTitle}>{"Bienvenida"}</h2>
                <div className={Styles.welcomeContainer}>
                    <div className={Styles.infoContainer}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                        
                    <img src={welcomeImage} alt="Hands image" className={Styles.welcomeImage}/>
                    
                </div>
            </div>
            
            <div className={Styles.inputContainer}>
                <label htmlFor="slideTitle" >
                            <h5>Titulo</h5>
                            <input id="slideTitle" value={title} onChange={async(event)=>{
                                setTitle(event.target.value)
                            }}>
                            </input>
                </label>

                <label htmlFor="slideImg" >
                            <h5>Imagen</h5>
                            <input id="slideImg" value={welcomeImage} onChange={(event)=>{
                                setWelcomeImage(event.target.value)
                            }}>
                            </input>
                </label>

                <label htmlFor="slideText" >
                            <h5>Texto</h5>
                            <input id="slideImg" value={text} onChange={(event)=>{
                                setText(event.target.value)
                            }}>
                            </input>
                </label>
            </div>
        </div>
    )
}

export default WelcomeContainer;