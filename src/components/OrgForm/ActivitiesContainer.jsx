import React, {useContext} from 'react';
import { AdminContext } from "../../contexts/adminContext"
import SlideContainer from './SlideContainer';
import Styles from "./OrgForm.module.css";

const ActivitiesContainer = () => {
    const {activitiesData} = useContext(AdminContext)
    return(
        <div className={Styles.activitiesContainer}>
            <h2 className={Styles.outTitle}>Actividades</h2>
            {activitiesData.map((dbObject)=>{
                return(
                        <SlideContainer key={dbObject.order} object={dbObject}/>
                    )
            })}
        </div>
    )
}

export default ActivitiesContainer;

