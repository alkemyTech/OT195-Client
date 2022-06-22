import React from "react";
import Loader from "../../components/Loader/Loader";
import NewsSlider from "../../components/Slider/NewsSlider";
import Styles from "./newsPage.module.css";
import useFetch from "../../hooks/useFetch";


const NewsPage = () => {

  let { data: newsInfo, loading } = useFetch(
    `${process.env.REACT_APP_NEWS_ENDPOINT}`
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <main className={Styles.main}>
      <h1 className={Styles.title}>Novedades</h1>
      <NewsSlider newsData={newsInfo.results}/>
    </main>
  );
};

export default NewsPage;