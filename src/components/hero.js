import React from 'react';
import styled, { keyframes } from 'styled-components';

const logoSize = keyframes`
    0% { transform: scale(1); }

    25% { transform: scale(1.1); }

    50% { transform: scale(1); }

    75% { transform: scale(1.05); }

    100% { transform: scale(1); }
`;

const logoCharacterJump = keyframes`
    0% { transform: translateY(0); }

    50% { transform: translateY(-20px); }

    100% { transform: translateY(0); }
`;

const characterEntry = keyframes`
    0% { transform: translateX(1200px) }

    100% { transform: translateX(0) }
`;

const HeroStyled = styled.section`    
    height: 100vh;
    background-image: url('./img/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    background-color: rgba(138,86,187,.5);
    background-blend-mode: soft-light;

    .hero__container {
        max-width: 1440px;
        margin: auto;
        padding: 0 30px;
        height: 100%;

        .hero__logo-container {
            max-width: 550px;
            background-color: white;
            padding: 0 40px;
    
            .hero__logo {
                animation: ${ logoSize } 6s infinite;
                width: 100%;
                z-index: 1;
            }
        }

        .hero__character-container {
            .hero__primary-character-container {
                z-index: 2;
                max-width: 700px;
                animation: ${ characterEntry } 1s ease;
                
                .hero__primary-character {
                    animation: ${ logoCharacterJump } 4s infinite ease;
                    width: 100%;
                }
            }

            .hero__secondary-character-container {
                max-width: 400px;
                margin-right: -470px;
                z-index: 3;
                animation: ${ characterEntry } 0.7s ease;
                
                .hero__secondary-character {
                    animation: ${ logoCharacterJump } 4s infinite ease;
                    width: 100%;
                }
            }
        }
    }

    .circle {
        width: 800px;
        height: 800px;
        background-color: #8A56BB;
        opacity: .9;
        position: absolute;
        bottom: -150px;
        right: -150px;
        border-radius: 50%;
        border: 2px solid white;
        animation: ${ logoCharacterJump } 4s infinite ease;

        &--secondary-state {
            width: 400px;
            height: 400px;
            bottom: initial;
            right: initial;
            top: -120px;
            left: -40px;
        }
    }
    

    @media screen and (max-width: 991px) {
        .hero__container {
            .hero__character-container {              
                .hero__primary-character-container {
                    max-width: 500px;
                }

                .hero__secondary-character-container {
                    max-width: 250px;
                    margin-right: -260px;
                }
            }
        }

        .circle {
            width: 600px;
            height: 600px;

            &--secondary-state {
                width: 400px;
                height: 400px;
            }
        } 
    }

    @media screen and (max-width: 767px) {
        .hero__container {
            .hero__logo-container {
                width: 100%;
                max-width: initial;
                padding: 30px 0;
                background-color: initial;
            }

            .hero__character-container {
                justify-content: flex-end;

                .hero__primary-character-container {
                    max-width: 300px;
                }

                .hero__secondary-character-container {
                    max-width: 150px;
                    margin-right: -200px;
                }
            }
        }

        .circle {
            width: 400px;
            height: 400px;
            background-color: white;
            border: 2px solid ${ props => props.theme.deepLilac };

            &--secondary-state {
                width: 300px;
                height: 300px;
            }
        }   
    } 
`;

function Hero() {
    return (
        <HeroStyled>

            <div className="container hero__container d-flex justify-content-between flex-column flex-md-row">

                <div className="hero__logo-container d-flex justify-content-center align-items-center">

                    <img className="hero__logo" src="./img/logo2.png" alt="Logo" />

                </div>

                <div className="hero__character-container d-flex align-items-center">

                    <div className="hero__secondary-character-container">

                        <img className="hero__secondary-character" src="./img/ribbon.png" alt="Ribbon" title="Ribbon" />

                    </div>

                    <div className="hero__primary-character-container">

                        <img className="hero__primary-character" src="./img/erina.png" alt="Erina" title="Erina" />

                    </div>

                </div>

            </div>

            <div className="circle"></div>
            <div className="circle circle--secondary-state"></div>

        </HeroStyled>
    )
}

export default Hero;