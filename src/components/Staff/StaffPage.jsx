import React, {useState} from 'react'
import SelectedCard from './SelectedCard';
import MemberCards from './MemberCards';
import Style from './StaffPage.module.css'
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';


const StaffPage = () => {


    const {data, loading} = useFetch(process.env.REACT_APP_MEMBERS_ENDPOINT)
    const [selectedMember, setSelectedMember] = useState([]);

    useEffect(() => {

        if(!loading) setSelectedMember(data.results[0])

    },  [loading, data.results])
    
    if(loading) return <Loader></Loader>


    return (

        <>
        <h1 className={Style.title}>¡Nuestro Staff!</h1>

        <SelectedCard member={selectedMember}/>

        <MemberCards data={data.results} selectMember={setSelectedMember} />
        </>
    )
}

export default StaffPage;
