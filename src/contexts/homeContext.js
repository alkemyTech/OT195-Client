import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

import imgManos from '../images/img_manos.png';
import foto3 from '../images/Foto3.jpg';
import foto6 from '../images/Foto6.jpg';
import foto10 from '../images/Foto10.jpg';


export const HomeContext = createContext();

export const HomeProvider = ({children}) =>{

    const activitiesRes = [
        {
            order: 1,
            imageUrl: foto3,
            text: 'Actividad de natación',
        },
        {   
            order: 2,
            imageUrl: foto6,
            text: 'Familias colaboran en las actividades',
        },
        {
            order: 3,
            imageUrl: foto10,
            text: 'Actividades recreativas',
        },
    ]

    const welcomeRes= {
        title:"Hola! Bienvenidxs",
        image: imgManos,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet orci enim lectus porttitor ut."
    }

    const [activitiesData, setActivitiesData] = useState(activitiesRes)
    const [welcomeData, setWelcomeData] = useState(welcomeRes)

    const value = {
        activitiesData,
        setActivitiesData,
        welcomeData,
        setWelcomeData,
    }

    return(
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    )
}