import React, { useContext } from "react";

import useFetch from "../../hooks/useFetch";

import Loader from "../../components/Loader/Loader";
import Title from "../../components/Title/Title";
import Slider from "../../components/Slider/Slider";
import News from "../../components/News/News";

const HomePage = () => {
  const { data: publicInfo, loading } = useFetch(
    process.env.REACT_APP_PUBLIC_ENDPOINT
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Title title={publicInfo.results.welcomeTitle} text={publicInfo.results.welcomeText} />
      <Slider />
      <News />

    </>
  );
};

export default HomePage;
