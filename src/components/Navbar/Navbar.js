import React from 'react';
import { A, Flex, H2 } from '../styles/Elements';

const Navbar = () => {
    return (
        <div className='container mt-3'>
            <Flex justify='space-between'>
                <H2 fontSize='24px' height='36px'>
                    Influencer Gear
                </H2>
                <div>
                    <A>Home</A>
                    <A>Products</A>
                    <A>Sign Up</A>
                    <A>Log in</A>
                </div>
            </Flex>
        </div>
    );
};

export default Navbar;