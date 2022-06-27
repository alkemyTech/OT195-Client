import React from 'react'
import Style from './StaffPage.module.css';
import { Container } from 'react-bootstrap';

const Card = ({member, selectMember})=>{
    
    {/* <div 
        className={Style.card} 
        style = {{backgroundImage: `url(${member.image})`}} 
        onClick={()=>{selectMember(member)}}>

        <h4>{member.name}</h4>
        <h5>{member.rol}</h5>

    </div> */}
    return(
    
    <Container className={`${Style.card} ${Style.imgTitle}`}>
      <img
      src={member.image}
      alt="somos-mas-welcome"
      className={Style.imgTitle}
      onClick={()=>{selectMember(member)}}
      />
    </Container>
    )
}

export default Card