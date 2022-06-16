import React from 'react'
import Card from './Card'
import Style from './StaffPage.module.css'

const MemberCards = ({data, selectMember}) => {


  return (
    <div className={Style.cardGrid}>
      {data.map((member, index) =>{
        return <Card member={member} selectMember={selectMember} key={index}></Card>
    })}
    </div>
  )
}

export default MemberCards