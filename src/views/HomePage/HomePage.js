import React from "react";
import { Container } from "react-bootstrap";

import useFetch from "../../hooks/useFetch";

import Loader from "../../components/Loader/Loader";
import Title from "../../components/Title/Title";
import CardList from "../../components/CardList/CardList";
import StaffCard from "../../components/CardList/StaffCard";
import TestimonyCard from "../../components/CardList/TestimonyCard";
import NewCard from "../../components/CardList/NewCard";

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

  const { data: testimonialsData, loading: testimonialsLoading } = useFetch(
    process.env.REACT_APP_TESTIMONIALS_ENDPOINT
  );

  return (
    <Container fluid="md">
      {!loadingInfo ? (
        <Title
          title={publicInfo.results.welcomeTitle}
          text={publicInfo.results.welcomeText}
          image={publicInfo.results.welcomeImage}
        />
      ) : (
        <Loader></Loader>
      )}
      <CardList
        data={staffInfo.results?.slice(0, 5)}
        loading={loadingStaff}
        title="Nuestro staff"
        link="/staff"
        CardComponent={StaffCard}
      ></CardList>
      <CardList
        data={testimonialsData.results?.slice(-5)} // corto el array y muestro los ultimos 5
        loading={testimonialsLoading}
        title="Testimonios"
        link="/testimonials"
        CardComponent={TestimonyCard}
      ></CardList>
      <CardList
        data={newsData.results?.slice(0, 5)}
        loading={loadingNews}
        title="Últimas novedades"
        link="/news"
        CardComponent={NewCard}
      ></CardList>
    </Container>
  );
};

export default HomePage;
