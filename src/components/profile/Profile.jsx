import React from "react";
import { useState } from "react";


import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";



export default function Profile(){
    
    const [data , setData] = useState(false);


    if(data === false){
        return(
            <div>
                <ProfileView data={data} setData={setData} />
            </div>
        )
    }

    return(
        <div>
            <ProfileEdit data={data } setData={setData} />
        </div>
    )
}