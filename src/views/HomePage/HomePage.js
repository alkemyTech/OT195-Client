import React from "react";

import useFetch from "../../hooks/useFetch";

import Loader from "../../components/Loader/Loader";
import Title from "../../components/Title/Title";
import CardList from "../../components/CardList/CardList";
import StaffCard from "../../components/CardList/StaffCard";
import { Container } from "react-bootstrap";
import TestimonyCard from "../../components/CardList/TestimonyCard";
import NewCard from "../../components/CardList/NewCard";
import CardListTestimony from "../../components/CardList/CardListTestimony";

// const dataTestimony = [
//   {
//     name: "Nombre y Apellido",
//     description:
//       "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
//   },
//   {
//     name: "Nombre y Apellido",
//     description:
//       "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
//   },
//   {
//     name: "Nombre y Apellido",
//     description:
//       "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
//   },
//   {
//     name: "Nombre y Apellido",
//     description:
//       "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
//   },
//   {
//     name: "Nombre y Apellido",
//     description:
//       "testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni",
//   },
// ];

const HomePage = () => {
  const { data: publicInfo, loading: loadingInfo } = useFetch(
    process.env.REACT_APP_PUBLIC_ENDPOINT
  );

  const { data: staffInfo, loading: loadingStaff } = useFetch(
    process.env.REACT_APP_MEMBERS_ENDPOINT
  );

  const { data: newsData, loading: loadingNews } = useFetch(
    process.env.REACT_APP_NEWS_ENDPOINT
  );

  const{data:testimonials, loading: loadingTestimonials } = useFetch(process.env.REACT_APP_TESTIMONIALS_ENDPOINT)

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
        data={staffInfo.results}
        loading={loadingStaff}
        title="Nuestro staff"
        link="/staff"
        CardComponent={StaffCard}
      ></CardList>
      <CardListTestimony
        data={testimonials.results}
        loading = {loadingTestimonials}
        title="Testimonios"
        link="testimonials"
        CardComponent={TestimonyCard}
      ></CardListTestimony>
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
