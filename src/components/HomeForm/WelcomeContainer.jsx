import React, {useState, useContext, useEffect} from 'react'
import Styles from "./HomeForm.module.css";
import { AdminContext } from '../../contexts/adminContext';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';


const WelcomeContainer = () => {
    const { data: publicInfo, loading } = useFetch(process.env.REACT_APP_PUBLIC_ENDPOINT);
    const  {welcomeData, setWelcomeData} = useContext(AdminContext)

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [image, setImage] = useState("")

    useEffect(()=>{
        if(publicInfo.results && loading){
            const {welcomeTitle, welcomeText, welcomeImage} = publicInfo.results

            let partialData = welcomeData
            partialData.text = welcomeText
            partialData.title = welcomeTitle
            setWelcomeData(partialData)

            setTitle(welcomeTitle)
            setImage(welcomeImage)
            setText(welcomeText)
        }
    },[publicInfo])
    if(loading){
        return(<Loader/>)
    }else{
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.viewContainer}>
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
                            <input id="slideImg" type="file" onChange={async(event)=>{
                                const urlImg = URL.createObjectURL(event.target.files[0])
                                setImage(urlImg)
                                let partialData = welcomeData;
                                partialData.image =event.target.files[0]
                                setWelcomeData(partialData)
                            }}>
                            </input>
                </label>

                <label htmlFor="slideText" >
                            <h5>Texto</h5>
                            <textarea id="slideImg" className={Styles.textarea} value={text} onChange={(event)=>{
                                setText(event.target.value)
                                let partialData = welcomeData;
                                partialData.text = event.target.value
                                setWelcomeData(partialData)
                            }}>
                            </textarea>
                </label>
            </div>
        </div>
    )
    }
}

export default WelcomeContainer;