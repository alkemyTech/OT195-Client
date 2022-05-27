import React from 'react';

import useFetch from '../../hooks/useFetch'

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import Loader from '../../components/Loader/Loader'
import Title from "../../components/Title/Title";
import Slider from "../../components/Slider/Slider";
import News from "../../components/News/News";
import { HomeProvider } from '../../contexts/homeContext';

const HomePage = () => {


    const { data: publicInfo, loading } = useFetch('http://127.0.0.1:3001/organizations/1/public');
    
    if(loading) {
        return <Loader />
    }

    return (
        <HomeProvider>
            <Header image={publicInfo.image}></Header>
            <Title welcomeTitle={publicInfo.welcomeTitle}/>
            <Slider/>
            <News news={publicInfo.news.slice(-4)}/>
            <Footer image={publicInfo.image}/>
        </HomeProvider>
    )
    
}

export default HomePage;