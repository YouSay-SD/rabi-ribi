import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const ChibiCharacterStyled = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${ props => props.theme.colors.secondary };
    margin: 0 10px;

    img {
        width: 80px;
        height: 80px;
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