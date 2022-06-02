import React, { useEffect } from "react";
import { useState } from "react";


import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function Profile(){
    
    const [editView , setEditView] = useState(false);
    const user = useSelector(({user}) => user.entity)
    const navigate = useNavigate()

    useEffect(() =>{
        if(!user.roleId) navigate('/')
    }, [user, navigate])

    if(editView === false){
        return(
            <div>
                <ProfileView setEditView={setEditView} userData={user} />
            </div>
        )
    }

    return(
        <div>
            <ProfileEdit setEditView={setEditView} userData={user}/>
        </div>
    )
}