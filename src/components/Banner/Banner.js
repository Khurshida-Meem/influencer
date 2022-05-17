import React from 'react';
import { Button, Flex, H1, P } from '../styles/Elements';
import img from '../../images/banner.png';

const Banner = () => {
    return (
        <div className='container mt-3'>
            <Flex justify='space-evenly'>
                <div>
                    <H1 fontSize='52px' height='70px'>
                        Start your Journey as <br />
                        Influencer
                    </H1>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sem vestibulum sed scelerisque eros. Lectus faucibus.
                    </P>
                    <Button>Prebook Now</Button>
                </div>
                <div>
                    <img src={img} alt="" />
                </div >
            </Flex>
        </div>
    );
};

export default Banner;