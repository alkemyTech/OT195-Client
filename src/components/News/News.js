import React from 'react';

import Item from './Item'

import { Container, Row, Col } from 'react-bootstrap'

import './News.css'

const News = (props) => {

    const { news } = props;

    return (
        <Container fluid className='mb-5 px-5'>
            <Container fluid className='justify-content-between d-flex news-text mb-3'>
                <h1>Últimas novedades</h1>
                <a href="/" className='news-link'>Ver todos &gt;</a>
            </Container>
            <Row>
                {news.map((data, key) => (
                        <Col md={3} sm={6} key={key}>
                            <Item image={data.image} text={data.text} link={data.link}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}


export default News;