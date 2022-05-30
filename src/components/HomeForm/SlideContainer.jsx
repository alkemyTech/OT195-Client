import React, {useState, useContext} from 'react'
import {AdminContext} from "../../contexts/adminContext";
import Styles from "./HomeForm.module.css";

const SlideContainer = ({object}) => {
    const {activitiesData, setActivitiesData} = useContext(AdminContext)
    const [text, setText] =useState(object.text)
    const [image, setImage] = useState(object.imageUrl)
    

    return (
        <div className={Styles.slideContainer}>
            <div className={Styles.viewContainer}>
                <h2 className={Styles.outSubTitle}>{`Slide ${object.order}`}</h2>
                <div className={Styles.slideTextContainer}>
                    <img src={image} className={Styles.slideImg}/>
                    <p className={Styles.slideText}>{text}</p>
                </div>
            </div>
            
            <div className={Styles.inputContainer}>
                
                <label htmlFor="slideImg" >
                            <h5>Imagen</h5>
                            <input id="slideImg" value={image} onChange={(event)=>{
                                setImage(event.target.value)
                                setActivitiesData(
                                    activitiesData.map((data)=>{
                                        if(data.order === object.order){
                                            data.imageUrl = event.target.value
                                        }
                                        return data
                                    })
                                )
                            }}>
                            </input>
                </label>

                <label htmlFor="slideText" >
                            <h5>Texto</h5>
                            <input id="slideText" value={text} onChange={(event)=>{
                                setText(event.target.value)
                                setActivitiesData(
                                    activitiesData.map((data)=>{
                                        if(data.order === object.order){
                                            data.text = event.target.value
                                        }
                                        return data
                                    })
                                )
                            }}>
                            </input>
                </label>
            </div>
        </div>
    )
}

export default SlideContainer;