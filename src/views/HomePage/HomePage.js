import React, { useContext } from "react";

import useFetch from "../../hooks/useFetch";

import Loader from "../../components/Loader/Loader";
import Title from "../../components/Title/Title";
import Slider from "../../components/Slider/Slider";
import News from "../../components/News/News";
import { AdminContext } from "../../contexts/adminContext";

const HomePage = () => {
  const { data: publicInfo, loading } = useFetch(
    process.env.REACT_APP_PUBLIC_ENDPOINT
  );

  const { welcomeData } = useContext(AdminContext);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Title title={welcomeData.title} text={welcomeData.text} />
      <Slider />
<<<<<<< HEAD
      {<News news={publicInfo.results.news.slice(-4)} />}
=======
      <News />
      <Footer image={publicInfo.results.image} />
>>>>>>> 88fb81a820c04ac7924e501b99722bcc6575e31a
    </>
  );
};

export default HomePage;
