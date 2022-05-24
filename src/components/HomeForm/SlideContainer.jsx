import React, {useState, useContext} from 'react'
import {HomeContext} from "../../contexts/homeContext";
import Styles from "./HomeForm.module.css";

const SlideContainer = ({object}) => {
    const {newData, setNewData} = useContext(HomeContext)
    const [text, setText] = useState(object.text)
    const [image, setImage] = useState(object.imageUrl)

    return (
        <div className={Styles.editContainer}>
            <div className={Styles.viewContainer}>
                <h2 className={Styles.outTitle}>{`Slide ${object.order}`}</h2>
                <div className={Styles.slideContainer}>
                    <p className={Styles.slideText}>{text}</p>
                    <img src={image}/>
                </div>
            </div>
            
            <div className={Styles.inputContainer}>
                
                <label htmlFor="slideImg" >
                            <h5>Imagen</h5>
                            <input id="slideImg" value={image} onChange={(event)=>{
                                const partialData = newData.map((data)=>{
                                    if(data.order === object.order){
                                        setImage(event.target.value)
                                        data.imageUrl = image
                                    }
                                    return data
                                })
                                setNewData(partialData)
                            }}>
                            </input>
                </label>

                <label htmlFor="slideText" >
                            <h5>Texto</h5>
                            <input id="slideImg" value={text} onChange={(event)=>{
                                const partialData = newData.map((data)=>{
                                    if(data.order === object.order){
                                        setText(event.target.value)
                                        data.text = text
                                    }
                                    return data
                                })
                                setNewData(partialData)
                            }}>
                            </input>
                </label>
            </div>
        </div>
    )
}

export default SlideContainer;