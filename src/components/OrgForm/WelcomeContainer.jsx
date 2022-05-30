import React, {useState, useContext} from 'react'
import Styles from "./OrgForm.module.css";
import { AdminContext } from '../../contexts/adminContext';


const WelcomeContainer = () => {

    const  {welcomeData, setWelcomeData} = useContext(AdminContext)

    const [title, setTitle] = useState(welcomeData.title)
    const [text, setText] = useState(welcomeData.text)
    const [image, setImage] = useState(welcomeData.image)
    let partialData = welcomeData;

    return (
        <div className={Styles.mainContainer}>
            
            <div className={Styles.viewContainer}>
                <div className={Styles.welcomeContainer}>
                    <div className={Styles.infoContainer}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                        
                    <img src={image} alt="Hands image" className={Styles.welcomeImage}/>
                    
                </div>
            </div>
            
            <div className={Styles.inputContainer}>
                <label htmlFor="slideTitle" >
                            <h5>Titulo</h5>
                            <input id="slideTitle" value={title} onChange={async(event)=>{
                                setTitle(event.target.value)
                                partialData.title = event.target.value
                                setWelcomeData(partialData)
                            }}>
                            </input>
                </label>

                <label htmlFor="slideImg" >
                            <h5>Imagen</h5>
                            <input id="slideImg" value={image} onChange={(event)=>{
                                setImage(event.target.value)
                                partialData.image = event.target.value
                                setWelcomeData(partialData)
                            }}>
                            </input>
                </label>

                <label htmlFor="slideText" >
                            <h5>Texto</h5>
                            <input id="slideImg" value={text} onChange={(event)=>{
                                setText(event.target.value)
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