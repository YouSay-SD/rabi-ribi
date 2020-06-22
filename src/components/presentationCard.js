import React from 'react';
import styled from 'styled-components';

const PresentationContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`;

const PresentationLeftStyled = styled.div`
    width: 50%;

    p {
        color: white;
        padding: 40px;
        margin-right: 30px;
        background-color: #1f2126;
        border: 2px solid #e85198;
        border-radius: 15px;
    }
`;

const PresentationRightStyled = styled.div`
    width: 50%;
    max-width: 450px;

    img {
        width: 100%;
        border: 2px solid #e85198;
        border-radius: 15px;
    }
`;

function PresentationCard() {
    return (
        <PresentationContainerStyled>

            <PresentationLeftStyled>

                <p>Dodge bullets, missiles and lasers in battle as you wrap your head around that bunny girl costume! 
                    Combo away with your mighty Piko Hammer or spam various spells from afar with your fiery fairy friend. 
                    Explore and explode through Rabi-Rabi Island as you collect power-ups and uncover secrets...</p>

            </PresentationLeftStyled>

            <PresentationRightStyled>

                <img src="./img/welcome/welcome-3.jpg" alt="Logo" />

            </PresentationRightStyled>

        </PresentationContainerStyled>
    )
}

export default PresentationCard;
