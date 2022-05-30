import React, {useState, useContext, useEffect} from 'react'
import Styles from "./OrgForm.module.css";
import { AdminContext } from '../../contexts/adminContext';


const EditContainer = () => {

    const  {organizationData, setOrganizationData} = useContext(AdminContext)

    const [logo, setLogo] = useState("");
    const [name, setName] = useState("");
    

    useEffect(()=>{
        setLogo(organizationData.results.image)
        setName(organizationData.results.name)
    },[organizationData])

    return (
        <div className={Styles.mainContainer}>

            <div className={Styles.inputContainer}>


                <div className={Styles.labelContainer}>
                    <img src={logo} alt="logo"/>
                    <label htmlFor="orgLogo"  >
                                <h5>Logo</h5>
                                <input id="orgLogo" value={logo} onChange={async(event)=>{
                                    setLogo(event.target.value)
                                    if(organizationData){
                                        let partialData = organizationData;
                                        partialData.results.image = event.target.value
                                        setOrganizationData(partialData)
                                    }
                                }}>
                                </input>
                    </label>
                </div>
                
                <div className={Styles.labelContainer}>
                    <h2 className={Styles.name}>{name}</h2>
                    <label htmlFor="orgName"  >
                                <h5>Nombre</h5>
                                <input id="orgName" value={name} onChange={(event)=>{
                                    setName(event.target.value)
                                    if(organizationData){
                                        let partialData = organizationData;
                                        partialData.results.name = event.target.value
                                        setOrganizationData(partialData)
                                    }
                                }}>
                                </input>
                    </label>
                </div>
                

            </div>
        </div>
    )
}

export default EditContainer;