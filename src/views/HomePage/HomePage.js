import React from 'react';

import useFetch from '../../hooks/useFetch'

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import Loader from '../../components/Loader/Loader'
import Title from "../../components/Title/Title";

const HomePage = () => {


    const { data: publicInfo, loading } = useFetch('http://localhost:3030/organizations/1/public');
    
    if(loading) {
        return <Loader />
    }

    return (
        <>
            <Header></Header>
            <Title welcomeText={publicInfo.welcomeText}/>
            
            <Footer />
        </>
    )
    
}

export default HomePage;