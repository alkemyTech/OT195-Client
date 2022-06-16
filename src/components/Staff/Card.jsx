import React from 'react'
import Style from './StaffPage.module.css';

const Card = ({member, selectMember})=>{
    

    return(
    <div 
        className={Style.card} 
        style = {{backgroundImage: `url(${member.image})`}} 
        onClick={()=>{selectMember(member)}}>

        <h4>{member.name}</h4>
        <h5>{member.rol}</h5>

    </div>
    )
}

export default Card