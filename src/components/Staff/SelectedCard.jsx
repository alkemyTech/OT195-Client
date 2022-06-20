import React from 'react'
import Button from "../Button/index";
import Style from "./StaffPage.module.css"
import { useNavigate } from "react-router-dom";


const SelectedCard = ({member}) => {
  const navigate = useNavigate()

  return (
    <>
      <article className={Style.cardContainer}>
          <div className={Style.infoContainer}>
              <h2>{member.name}</h2>
              <h3>{member.rol}</h3>
              <p>{member.description}</p>
              <Button styles="primary btn-title btn-lg py-3 px-5"
              callbackClick={()=>{navigate("/contact")}}
              >¡Quiero ser parte!</Button>
          </div>

          <img src={member.image}/>
      </article>

    </>
  )
}

export default SelectedCard;