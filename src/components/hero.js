import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const HeroStyled = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 110px;

    /* Mobile */
    ${respondBelow.sm`
        margin-bottom: 70px;
    `} 

    div {
        background: linear-gradient(0deg,rgba(255,177,200,1) 0%,rgba(255,108,135,0) 40%);
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        object-position: center center;

        /* Mobile */
        ${respondBelow.sm`
            height: 250px;
        `} 
    }
`;

function Hero(props) {
    return (

        <HeroStyled className="cloud-bottom">

            <div></div>

            <img src={ props.img } alt="Hero" />

        </HeroStyled>

    )
}

export default Hero;
