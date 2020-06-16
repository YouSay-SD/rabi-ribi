import React from 'react';
import styled from 'styled-components';

const HeroStyled = styled.div`
    @keyframes logoSize {
        0% {
            transform: scale(1);
        }

        25% {
            transform: scale(1.1);
        }

        50% {
            transform: scale(1);
        }

        75% {
            transform: scale(1.05);
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes logoCharacterJump {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-20px);
        }

        100% {
            transform: translateY(0);
        }
    }

    section {
        height: 100vh;
        background-image: url('./img/background.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
        background-color: rgba(138,86,187,.5);
        background-blend-mode: soft-light;

        .container {
            max-width: 1440px;
            margin: auto;
            padding: 0 30px;
            display: flex;
            justify-content: space-between;
            height: 100%;
    
            .hero__logo-container {
                display: flex;
                justify-content: center;
                align-items: center;
                max-width: 550px;
                background-color: rgba(255,255,255,.9);
                padding: 0 40px;
        
                .hero__logo {
                    animation: logoSize 6s infinite;
                    width: 100%;
                    z-index: 1;
                }
            }

            .hero__logo-character-container {
                display: flex;
                align-items: center;

                .hero__logo-character {
                    max-width: 700px;
                    z-index: 2;
                    animation: logoCharacterJump 4s infinite ease;
    
                    &--ribbon {
                        max-width: 400px;
                        margin-right: -440px;
                        z-index: 3;
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
            animation: logoCharacterJump 4s infinite ease;

            &--secondary-state {
                width: 400px;
                height: 400px;
                bottom: initial;
                right: initial;
                top: -120px;
                left: -40px;
            }
        }
    }
`

function Hero() {
    return (
        <HeroStyled>

            <section>

                <div className="container">

                    <div className="hero__logo-container">
                        <img className="hero__logo" src="./img/logo2.png" alt="Logo" />
                    </div>

                    <div className="hero__logo-character-container">
                        <img className="hero__logo-character hero__logo-character--ribbon" src="./img/ribbon.png" alt="Ribbon" />
                        <img className="hero__logo-character hero__logo-character--erina" src="./img/erina.png" alt="Erina" />
                    </div>

                </div>

                <div className="circle"></div>
                <div className="circle circle--secondary-state"></div>

            </section>

        </HeroStyled>
    )
}

export default Hero;