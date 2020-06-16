import React from 'react';
import styled from 'styled-components';

const HeroStyled = styled.div`
    @keyframes logoJump {
        0% {
            transform: scale(1);
        }

        25% {
            transform: scale(1.2);
        }

        50% {
            transform: scale(1);
        }

        75% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;

        img {
            width: 100%;
            max-width: 700px;
            animation-name: logoJump;
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }
    }
`

function Hero() {
    return (
        <HeroStyled>
            <div className='logo-container'>
                <img src='./img/logo2.png' alt="Logo" />
            </div>
        </HeroStyled>
    )
}

export default Hero;