import React from 'react';

import { Nav } from 'react-bootstrap'

import Link from './Link';


const Menu = (props) => {
    
    const { links } = props;

    return (
        <Nav as='ul' className='justify-content-center my-4'>
            {links?
                links.map((data, key) => (
                    <Link data={data} key={key} />
                ))
                :null
            }
        </Nav>
    )
}

export default Menu;