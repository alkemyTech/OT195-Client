import React from "react";
import Loader from "../../components/Loader/Loader";
import Styles from "../News/newsPage.module.css"
import useFetch from "../../hooks/useFetch";
import TestimoniesSlider from "../../components/Slider/TestimoniesSlider";


// const NewsPage = () => {
export default function TestimoniesPage(){


  let { data: testimonies, loading } = useFetch( // traigo el get de testimomios con este hook personalizado
    process.env.REACT_APP_TESTIMONIALS_ENDPOINT
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <main className={Styles.main}>
      <h1 className={Styles.title}>Testimonios</h1>
      <TestimoniesSlider testimoniesData={testimonies.results}/> {/*Traigo TestimoniesSlider.jsx */}
    </main>
  );
};

// export default NewsPage;