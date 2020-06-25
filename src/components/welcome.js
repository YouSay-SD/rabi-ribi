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

const WelcomeTextContentStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const WelcomeTitleStyled = styled.h1`
    font-size: 50px;
    font-weight: ${ props => props.theme.fontWeigth.bold };
    text-align: center;
    padding: 10px 20px;
    margin-bottom: 40px;
    color: ${ props => props.theme.colors.secondary };
    -webkit-text-fill-color: ${ props => props.theme.colors.white };
    -webkit-text-stroke-width: 2px;
    
    /* Mobile */
    ${respondBelow.sm`
        font-size: 35px;
        -webkit-text-stroke-width: 2px;
    `}  
`;

const WelcomeCopyStyled = styled.p`
    color: ${ props => props.theme.colors.secondary };
    padding: 50px;
    border: 2px solid ${ props => props.theme.colors.secondary };
    border-radius: 15px;
    font-size: 23px;
    position: relative;
    -webkit-text-fill-color: ${ props => props.theme.colors.white };
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

                <WelcomeTextContentStyled>

                    <WelcomeTitleStyled className="box-title">Welcome to Rabi Ribi!</WelcomeTitleStyled>

                    <WelcomeCopyStyled>Dodge bullets, missiles and lasers in battle as you wrap your head around that bunny girl costume! 
                        Combo away with your mighty Piko Hammer or spam various spells from afar with your fiery fairy friend. 
                        Explore and explode through Rabi-Rabi Island as you collect power-ups and uncover secrets...
                        
                        <img src="./img/chibi/chibi-ribbon.png" alt="Ribbon" title="Ribbon" />    
                        
                    </WelcomeCopyStyled>

                </WelcomeTextContentStyled>

            </div>

        </WelcomeStyled>
    )
}

export default Welcome;