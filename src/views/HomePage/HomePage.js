import React from "react";

import useFetch from "../../hooks/useFetch";

import Loader from "../../components/Loader/Loader";
import Title from "../../components/Title/Title";
import CardList from "../../components/CardList/CardList";
import StaffCard from "../../components/CardList/StaffCard";
import { Container } from "react-bootstrap";
import TestimonyCard from "../../components/CardList/TestimonyCard";
import NewCard from "../../components/CardList/NewCard";

const data = [
  {
    name: "Julian Fernandez",
    description: "Ceo / CoFunder",
  },
  {
    name: "Julian Fernandez",
    description: "Ceo / CoFunder",
  },
  {
    name: "Julian Fernandez",
    description: "Ceo / CoFunder",
  },
  {
    name: "Julian Fernandez",
    description: "Ceo / CoFunder",
  },
  {
    name: "Julian Fernandez",
    description: "Ceo / CoFunder",
  },
];

const dataTestimony = [
  {
    name: "Nombre y Apellido",
    description:
      "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
  },
  {
    name: "Nombre y Apellido",
    description:
      "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
  },
  {
    name: "Nombre y Apellido",
    description:
      "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
  },
  {
    name: "Nombre y Apellido",
    description:
      "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
  },
  {
    name: "Nombre y Apellido",
    description:
      "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
  },
];

const HomePage = () => {
  const { data: publicInfo, loading: loadingInfo } = useFetch(
    process.env.REACT_APP_PUBLIC_ENDPOINT
  );

  const { data: newsData, loading: loadingNews } = useFetch(
    process.env.REACT_APP_NEWS_ENDPOINT
  );

  return (
    <Container fluid="md">
      {!loadingInfo ? (
        <Title
          title={publicInfo.results.welcomeTitle}
          text={publicInfo.results.welcomeText}
        />
      ) : (
        <Loader></Loader>
      )}
      <CardList
        data={data}
        title="Nuestro staff"
        link="/staff"
        CardComponent={StaffCard}
      ></CardList>
      <CardList
        data={dataTestimony}
        title="Testimonios"
        link="/testimonials"
        CardComponent={TestimonyCard}
      ></CardList>
      <CardList
        data={newsData.results}
        loading={loadingNews}
        title="Últimas novedades"
        link="/news"
        CardComponent={NewCard}
      ></CardList>
    </Container>
  );
};

export default HomePage;
