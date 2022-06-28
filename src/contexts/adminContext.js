import React, { createContext, useState } from "react";

import imgManos from '../images/img_manos.png';
import foto3 from '../images/Foto3.jpg';
import foto6 from '../images/Foto6.jpg';
import foto10 from '../images/Foto10.jpg';


export const AdminContext = createContext();

export const AdminProvider = ({children}) =>{

    const welcomeRes= {
        title:"",
        image: "",
        text: ""
    }

    const [welcomeData, setWelcomeData] = useState(welcomeRes)
    const [organizationData, setOrganizationData] = useState(null)
    const [newsData, setNewsData] = useState(null)

    const value = {
        welcomeData,
        setWelcomeData,

        organizationData,
        setOrganizationData,

        newsData,
        setNewsData
    }

    return(
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}