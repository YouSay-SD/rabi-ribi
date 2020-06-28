import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const CharacterStyled = styled.article`
    display: flex;
    flex-wrap: wrap;
`;

const CharacterTextStyled = styled.div`
    width: 65%;
    padding: 50px;

    h4 {
        display: block;
        margin-bottom: 30px;
        border-bottom: 1px solid white;
        padding: 10px 0;
    }

    p {
        font-size: 16px;
        font-family: ${ props => props.theme.fontFamily.secondary };
        font-weight: ${ props => props.theme.fontWeight.bold };
    }
`;

const CharacterImageStyled = styled.div`
    width: 35%;

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
