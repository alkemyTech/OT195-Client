import React from 'react';

import { Nav } from 'react-bootstrap'

import Icon from './Icon';


const Menu = (props) => {
    
    const { media } = props;

    return (
        <Nav as='ul' className='justify-content-center my-4'>
            {media?
                media.map((data, key) => (
                    <Icon data={data} key={key} />
                ))
                :null
            }
        </Nav>
    )
}

export default Menu;