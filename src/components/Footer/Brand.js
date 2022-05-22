import React from 'react';

import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Brand = (props) => {

    const { name, src } = props;


    return (
        <Navbar className='justify-content-center'>
            <hr className='separator'/>
            <Navbar.Brand as={ Link } to='/' className='px-5 img-container'>
                <img src={src} alt={name} />
            </Navbar.Brand>
        </Navbar>
    )
}

export default Brand;