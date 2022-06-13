import React, { useContext, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import {AdminContext} from '../../contexts/adminContext';
import NewsSlider from "../../components/Slider/NewsSlider";
import Styles from "./newsPage.module.css";
import useFetch from "../../hooks/useFetch";


const NewsPage = () => {

    const { data: newsInfo, loading } = useFetch(
        process.env.REACT_APP_NEWS_ENDPOINT
    );

    const { newsData, setNewsData } = useContext(AdminContext);

    useEffect(()=>{
        setNewsData(newsInfo)
    },[newsInfo, loading, setNewsData])

  if (loading && newsData !== null) {
    return <Loader />;
  }

  return (
    <main className={Styles.main}>
      <h1 className={Styles.title}>Novedades</h1>

      <NewsSlider/>

    </main>
  );
};

export default NewsPage;