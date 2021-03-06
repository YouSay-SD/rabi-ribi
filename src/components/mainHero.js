import React from 'react';
import styled, { keyframes } from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const LogoSize = keyframes`
    0% { transform: scale(1); }

    25% { transform: scale(1.1); }

    50% { transform: scale(1); }

    75% { transform: scale(1.05); }

    100% { transform: scale(1); }
`;

const LogoCharacterJump = keyframes`
    0% { transform: translateY(0); }

    50% { transform: translateY(-20px); }

    100% { transform: translateY(0); }
`;

const CharacterEntry = keyframes`
    0% { transform: translateX(1200px); }

    100% { transform: translateX(0); }
`;

const MainHeroStyled = styled.div`    
    height: 100vh;
    background-image: url('./img/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    background-color: rgba(${ props => props.theme.colorsRGB.primary },.5);
    background-blend-mode: soft-light;
`;

const ContainerStyled = styled.div`
    max-width: 1440px;
    margin: auto;
    padding: 0 30px;
    height: 100%;
    display: flex;
    justify-content: space-between;
   
    /* Mobile */
    ${respondBelow.sm`
        flex-direction: column;
    `}
`;

const LogoContainerStyled = styled.div`
    max-width: 550px;
    background-color: white;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Mobile */
    ${respondBelow.sm`
        width: 100%;
        max-width: initial;
        padding: 30px 0;
        background-color: initial;  
    `}
`;

const LogoStyled = styled.img`
    animation: ${ LogoSize } 6s infinite;
    width: 100%;
    z-index: 1;
`;

const CharacterContainerStyled = styled.div`
    display: flex;
    align-items: center;

    /* Mobile */
    ${respondBelow.sm`
        justify-content: flex-end; 
    `}
`;

const RibbonContainerStyled = styled.div`
    max-width: 400px;
    margin-right: -470px;
    z-index: 3;
    animation: ${ CharacterEntry } 0.7s ease;

    /* Tablet */
    ${respondBelow.md`
        max-width: 250px;
        margin-right: -260px;  
    `}

    /* Mobile */
    ${respondBelow.sm`
        max-width: 150px;
        margin-right: -200px;  
    `}
`;

const RibbonStyled = styled.img`
    animation: ${ LogoCharacterJump } 4s infinite ease;
    width: 100%;
`;

const ErinaContainerStyled = styled.div`
    z-index: 2;
    max-width: 700px;
    animation: ${ CharacterEntry } 1s ease;

    /* Tablet */
    ${respondBelow.md`
        max-width: 500px; 
    `}

    /* Mobile */
    ${respondBelow.sm`
        max-width: 300px;
    `}
`;

const ErinaStyled = styled.img`
    animation: ${ LogoCharacterJump } 4s infinite ease;
    width: 100%;
`;

const CirclePrimaryStyled = styled.div`
    width: 800px;
    height: 800px;
    background-color: ${ props => props.theme.colors.primary }; 
    opacity: .9;
    position: absolute;
    bottom: -150px;
    right: -150px;
    border-radius: 50%;
    border: 2px solid ${ props => props.theme.colors.white };
    animation: ${ LogoCharacterJump } 4s infinite ease;

    /* Tablet */
    ${respondBelow.md`
        width: 600px;
        height: 600px;  
    `}

    /* Mobile */
    ${respondBelow.sm`
        width: 400px;
        height: 400px;
        background-color: ${ props => props.theme.colors.white }; 
        border: 2px solid ${ props => props.theme.colors.primary };  
    `}
`;

function MainHero() {
    return (
        <MainHeroStyled>

            <ContainerStyled>
                
                <LogoContainerStyled>

                    <LogoStyled src="./img/logo/logo2.png" alt="Logo" />

                </LogoContainerStyled>

                <CharacterContainerStyled>

                    <RibbonContainerStyled>

                        <RibbonStyled src="./img/ribbon.png" alt="Ribbon" title="Ribbon" />

                    </RibbonContainerStyled>

                    <ErinaContainerStyled>

                        <ErinaStyled src="./img/erina.png" alt="Erina" title="Erina" />

                    </ErinaContainerStyled>

                </CharacterContainerStyled>

            </ContainerStyled>

            <CirclePrimaryStyled />
            
        </MainHeroStyled>
    )
}

export default MainHero;