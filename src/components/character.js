import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const CharacterStyled = styled.article`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const CharacterTextStyled = styled.div`
    width: 65%;
    height: min-content;
    padding: 0 50px;

    /* Mobile */
    ${respondBelow.sm`
        width: 100%;
        order: 2;
        padding: 0;
        text-align: center;
    `}

    h4 {
        display: block;
        margin-bottom: 20px;
        border-bottom: 1px solid ${ props => props.theme.colors.white };
        padding: 10px 0;

        /* Mobile */
        ${respondBelow.sm`
            color: ${ props => props.theme.colors.secondary };  
            margin-bottom: 0;
        `}
    }

    p {
        font-size: 16px;
        font-family: ${ props => props.theme.fontFamily.secondary };
        font-weight: ${ props => props.theme.fontWeight.bold };

        /* Tablet */
        ${respondBelow.md`
            font-size: 14px; 
        `}

        /* Mobile */
        ${respondBelow.sm`
            color: ${ props => props.theme.colors.secondary };  
        `}
    }
`;

const CharacterImageStyled = styled.div`
    width: 35%;

    /* Mobile */
    ${respondBelow.sm`
        width: 100%;
        margin-bottom: 20px;
    `}

    img {
        width: 100%;
    }
`;

function Character({ name, img, description }) {
    return (

        <CharacterStyled>

            <CharacterTextStyled>

                <h4>{ name }:</h4>

                <p>{ description }</p>

            </CharacterTextStyled>

            <CharacterImageStyled>

                <img src={ img } alt={ name } />

            </CharacterImageStyled>

        </CharacterStyled>

    )
}

export default Character;
