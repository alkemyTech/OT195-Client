import React, { useContext } from "react";

import useFetch from "../../hooks/useFetch";

import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import Title from "../../components/Title/Title";
import Slider from "../../components/Slider/Slider";
import News from "../../components/News/News";
import { AdminContext} from '../../contexts/adminContext';

const HomePage = () => {


    const { data: publicInfo, loading } = useFetch('http://127.0.0.1:3001/organizations/1/public');
    const {welcomeData} = useContext(AdminContext)


    if(loading) {
        return <Loader />
    }
    return (<>
            <Title title={welcomeData.title} text={welcomeData.text}/>
            <Slider/> 
            {<News news={publicInfo.results.news.slice(-4)}/>}
            <Footer image={publicInfo.results.image}/>
            </>
    )

}

export default HomePage;
