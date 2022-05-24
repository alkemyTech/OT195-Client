import React, {useEffect, useState, useContext} from 'react'
import {HFormContext, HFormProvider} from "../../contexts/hFormContext";
import Styles from "./HomeForm.module.css";



const SlideContainer = ({object}) => {
    const {newData, setNewData} = useContext(HFormContext)
    const [title, setTitle] = useState(object.title)
    const [text, setText] = useState(object.text)
    const [image, setImage] = useState(object.imageUrl)

    return (


        <div className={Styles.editContainer}>
            <div className={Styles.viewContainer}>
                <h2 className={Styles.outTitle}>{`Slide ${object.order}`}</h2>
                <div className={Styles.slideContainer}>
                    <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                    <img src={image}/>
                </div>
            </div>
            
            <div>
                <label htmlFor="slideTitle" >
                            <h5>Titulo</h5>
                            <input id="slideTitle" value={title} onChange={async(event)=>{
                                const partialData = await newData.map((data)=>{
                                    if(data.order === object.order){
                                        setTitle(event.target.value)
                                        data.title = title
                                    }
                                    return data
                                })
                                setNewData(partialData)
                            }}>
                            </input>
                </label>

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