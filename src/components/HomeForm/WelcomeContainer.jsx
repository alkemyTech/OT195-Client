import React, {useState, useContext} from 'react'
import Styles from "./HomeForm.module.css";
import { AdminContext } from '../../contexts/adminContext';


const WelcomeContainer = () => {

    const  {welcomeData, setWelcomeData} = useContext(AdminContext)

    const [title, setTitle] = useState(welcomeData.title)
    const [text, setText] = useState(welcomeData.text)
    const [image, setImage] = useState(welcomeData.image)

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.viewContainer}>
                <h2 className={Styles.outTitle}>{"Bienvenida"}</h2>
                <div className={Styles.welcomeContainer}>
                    <div className={Styles.infoContainer}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                        
                    <img src={image} alt="Hands" className={Styles.welcomeImage}/>
                    
                </div>
            </div>
            
            <div className={Styles.inputContainer}>
                <label htmlFor="slideTitle" >
                            <h5>Titulo</h5>
                            <input id="slideTitle" value={title} onChange={async(event)=>{
                                setTitle(event.target.value)
                                let partialData = welcomeData;
                                partialData.title = event.target.value
                                setWelcomeData(partialData)
                            }}>
                            </input>
                </label>

                <label htmlFor="slideImg" >
                            <h5>Imagen</h5>
                            <input id="slideImg" value={image} onChange={(event)=>{
                                setImage(event.target.value)
                                let partialData = welcomeData;
                                partialData.image = event.target.value
                                setWelcomeData(partialData)
                            }}>
                            </input>
                </label>

                <label htmlFor="slideText" >
                            <h5>Texto</h5>
                            <input id="slideImg" value={text} onChange={(event)=>{
                                setText(event.target.value)
                                let partialData = welcomeData;
                                partialData.text = event.target.value
                                setWelcomeData(partialData)
                            }}>
                            </input>
                </label>
            </div>
        </div>
    )
}

export default WelcomeContainer;