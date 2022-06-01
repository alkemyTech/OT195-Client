import React from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import { Container, Image, Row } from "react-bootstrap";

import { useParams } from 'react-router-dom'

import Info from './Info'

import "./Detail.css";

const Detail = () => {

    let { id } = useParams();

    const { data: newsInfo, loading } = useFetch(
      process.env.REACT_APP_NEWS_ENDPOINT + '/' + id
    );

    if (loading) {
      return <Loader />;
    }

    return (
      <Container fluid className="mb-5 new-container">
        <Row className="text-center my-4">
          <h1 className="title">Novedades</h1>
        </Row>
        <Row className='img-new'>
          <Image src={'http://localhost:3005/images/' + newsInfo.results.image} alt={'Image ' + newsInfo.results.id}/>
        </Row>
        <Info name={newsInfo.results.name} content={newsInfo.results.content} />
      </Container>
    );
  };
  
export default Detail;