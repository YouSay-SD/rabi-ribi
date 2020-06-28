import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const ChibiCharacterStyled = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
    background-color: ${ props => props.theme.colors.secondary };
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
        background-color: initial;
    }

    /* Tablet */
    ${respondBelow.md`
      
    `}

    /* Mobile */
    ${respondBelow.sm`
        width: 55px;
        height: 55px;
        
        &:hover {
            background-color: ${ props => props.theme.colors.secondary };
        }
    `}

    img {
        width: 100%;
    }
`;


function ChibiCharacter({ img, name }) {
    return (

        <ChibiCharacterStyled>

            <img src={ img } alt={ name } />

        </ChibiCharacterStyled>

    )
}

export default ChibiCharacter;