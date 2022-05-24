import React, { createContext, useState } from "react";


export const HFormContext = createContext();

export const HFormProvider = ({children}) =>{

    const dbResponse = [
        {
            order: 1,
            title: "Hola! Bienvenidx",
            imageUrl: "https://picsum.photos/563/500",
            text: "asdasd",
        },
        {   
            order: 2,
            title: "title 2",
            imageUrl: "https://picsum.photos/563/501",
            text: "asd",
        },
        {
            order: 3,
            title: "title 3",
            imageUrl: "https://picsum.photos/562/500",
            text: "asd",
        },
    ]

    const [dbData, setDbData] = useState(dbResponse)
    const [newData, setNewData] = useState(dbData)

    const value = {
        dbData,
        setDbData,
        newData,
        setNewData,
    }
    return(
        <HFormContext.Provider value={value}>
            {children}
        </HFormContext.Provider>
    )
}