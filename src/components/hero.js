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
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(138,86,187,1) 100%);
        position: relative;
        overflow: hidden;

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
        
                .hero__logo {
                    width: 100%;
                    max-width: 580px;
                    animation: logoSize 6s infinite;
                    z-index: 1;
                }
            }

            .hero__logo-character-container {
                display: flex;
                align-items: center;

                .hero__logo-character {
                    max-width: 650px;
                    z-index: 2;
                    animation: logoCharacterJump 4s infinite ease;
    
                    &--ribbon {
                        max-width: 370px;
                        margin-right: -440px;
                        z-index: 3;
                    }
                }
            }
        }

        .hero__circle {
            background-color: #8A56BB;
            position: absolute;
            border-radius: 50%;
            opacity: .8;
            
            &--primary {
                width: 700px;
                height: 700px;
                right: 0;
                bottom: 30px;
            }

            &--secondary {
                width: 300px;
                height: 300px;
                left: -100px;
                top: -130px;
                opacity: .9;
            }

            &--terciary {
                width: 300px;
                height: 300px;
                bottom: -40px;
                left: 12%;
            }

            &--quarter {
                width: 350px;
                height: 350px;
                top: 0;
                left: 50%;
                opacity: .7;
            }

            &--fifth {
                width: 150px;
                height: 150px;
                bottom: 0;
                left: 50%;
                opacity: .7;
            }

            &--sixth {
                width: 150px;
                height: 150px;
                bottom: 50%;
                left: 40%;
                opacity: .5;
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

                <div className="hero__circle hero__circle--primary"></div>

                <div className="hero__circle hero__circle--secondary"></div>

                <div className="hero__circle hero__circle--terciary"></div>

                <div className="hero__circle hero__circle--quarter"></div>

                <div className="hero__circle hero__circle--fifth"></div>

                <div className="hero__circle hero__circle--sixth"></div>

            </section>

        </HeroStyled>
    )
}

export default Hero;