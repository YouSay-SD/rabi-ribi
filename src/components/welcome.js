import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const WelcomeStyled = styled.section`
    margin-top: 0 !important;

    /* Remove Cloud Top */
    &:before {
        display: none;
    }
`;

const WelcomeTitle = styled.h1`
    font-size: 65px;
    font-family: 'Comic Neue';
    color: #e85198;
    line-height: 1;
    font-weight: bold;
    text-align: center;
    margin-bottom: 60px;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 3px;

    /* Mobile */
    ${respondBelow.sm`
        font-size: 45px;
        -webkit-text-stroke-width: 2px;
    `}
`;

const WelcomeCopy = styled.p`
    color: #e85198;
    padding: 50px;
    border: 2px solid #e85198;
    border-radius: 15px;
    font-size: 23px;
    position: relative;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;

    /* Mobile */
    ${respondBelow.sm`
        font-size: 16px;
        padding: 45px 30px;
    `}

    img {
        position: absolute;
        right: -65px;
        bottom: -65px;

        /* Mobile */
        ${respondBelow.sm`
            right: -10px;
            max-width: 100px;
        `}
    }
`;

function Welcome() {
    return (
        <WelcomeStyled className="rose-background">

            <div className="container">

                <WelcomeTitle>Welcome to Rabi Ribi!</WelcomeTitle>

                <WelcomeCopy>Dodge bullets, missiles and lasers in battle as you wrap your head around that bunny girl costume! 
                    Combo away with your mighty Piko Hammer or spam various spells from afar with your fiery fairy friend. 
                    Explore and explode through Rabi-Rabi Island as you collect power-ups and uncover secrets...
                    
                    <img src="./img/chibi/chibi-ribbon.png" alt="Ribbon" title="Ribbon" />    
                    
                </WelcomeCopy>

            </div>

        </WelcomeStyled>
    )
}

export default Welcome;