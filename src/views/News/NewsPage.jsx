import React, { useContext, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import {AdminContext} from '../../contexts/adminContext';
import NewsSlider from "../../components/Slider/NewsSlider";
import Styles from "./newsPage.module.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const NewsPage = () => {

    const { data: newsInfo, loading } = useFetch(
        process.env.REACT_APP_NEWS_ENDPOINT
    );

    const dataExample = {
      entries: [
        {
          name: "Nombre de la novedad 1",
          image: 'https://picsum.photos/1200/500'
        },
        {
          name: "Nombre de la novedad 2",
          image: 'https://picsum.photos/1200/501'
        },
        {
          name: "Nombre de la novedad 3",
          image: 'https://picsum.photos/1202/500'
        },
      ],
      ok:true
    }

    const { newsData, setNewsData } = useContext(AdminContext);
    const navigate = useNavigate()

    useEffect(()=>{
      setNewsData(dataExample)
      //Next line set db data in slides (delete previous line)
        //setNewsData(newsInfo)
    },[newsInfo, loading, setNewsData])

  if (loading && newsData !== null) {
    return <Loader />;
  }
  return (
    <main className={Styles.main}>
      <h1 className={Styles.title}>Novedades</h1>

      <NewsSlider/>
      <div className={Styles.buttonContainer}>
        <button onClick={()=>{navigate("/home")}}>Ir al inicio</button>
      </div>
    </main>
  );
};

export default NewsPage;