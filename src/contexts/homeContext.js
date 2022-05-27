import React, { createContext, useState } from "react";
import imgManos from '../images/img_manos.png';

export const HomeContext = createContext();

export const HomeProvider = ({children}) =>{

    const dbResponse = [
        {
            order: 1,
            title: "Hola! Bienvenidx",
            imageUrl: "https://picsum.photos/763/500",
            text: "asdasd",
        },
        {   
            order: 2,
            title: "title 2",
            imageUrl: "https://picsum.photos/763/501",
            text: "asd",
        },
        {
            order: 3,
            title: "title 3",
            imageUrl: "https://picsum.photos/762/500",
            text: "asd",
        },
    ]


    const [dbData, setDbData] = useState(dbResponse)
    const [newData, setNewData] = useState(dbData)
    const [welcomeImage, setWelcomeImage] = useState(imgManos)

    const value = {
        dbData,
        setDbData,
        newData,
        setNewData,
        welcomeImage,
        setWelcomeImage
    }

    return(
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    )
}