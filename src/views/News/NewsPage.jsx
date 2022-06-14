import React from "react";
import Loader from "../../components/Loader/Loader";
import NewsSlider from "../../components/Slider/NewsSlider";
import Styles from "./newsPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const NewsPage = () => {

  const {id} = useParams();

  const { data: newsInfo, loading } = useFetch(
    `${process.env.REACT_APP_NEWS_ENDPOINT}${id === undefined ? "" : id}`
  );

  const navigate = useNavigate()

  if (loading) {
    return <Loader />;
  }
  return (
    <main className={Styles.main}>
      <h1 className={Styles.title}>Novedades</h1>

      <NewsSlider newsData={newsInfo.results || []}/>
      <div className={Styles.buttonContainer}>
        <button onClick={()=>{navigate("/home")}}>Ir al inicio</button>
      </div>
    </main>
  );
};

export default NewsPage;