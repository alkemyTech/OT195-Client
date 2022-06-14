import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from "../../hooks/useFetch"; 
import Loader from "../Loader/Loader";
import { Row, Col } from 'react-bootstrap'
import Info from './Info'
import Image from './Image'


import './Detail.css'

const Detail = () => {
    
    let { id } = useParams();

    const { data: newsInfo, loading } = useFetch(
      process.env.REACT_APP_NEWS_ENDPOINT + '/' + id
    );

    if (loading) {
      return <Loader />;
    }

    
    return (
        <Row className='title-box'>
            <Col className='px-1 py-5 d-flex'>
                <Image/>
            </Col>
            <Col className='px-1 py-5 d-flex'>
                <Info name={newsInfo.results.name} content={newsInfo.results.content} />
            </Col>
        </Row>
    )
}

export default Detail;