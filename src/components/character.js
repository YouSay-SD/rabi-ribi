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

function Character() {
    return (

        <CharacterStyled>

            <CharacterTextStyled>

                <h4>Erina :</h4>

                <p>Erina is the main protagonist and only known bunny on Rabi Rabi Island. She has been transformed into a human for unknown reasons.
                She loves her master, Rumi, and wants to help her find her sister, Miru, along with restoring the peace on Rabi Rabi Island.
                Erina encounters Ribbon the fairy after getting lost in the Spectral Cave. They teamed up togather after Erina agreed to help her rescue her friends from a strange blonde haired girl.
                She is both being chased by the UPRPRC and mistaken for being a member of the UPRPRC due to her bunny ears.
                Although formal and polite when meeting new people, she has a tendency to accidentally anger them.
                Erina is six months old as a bunny or about 15-16 years old as a human.</p>

            </CharacterTextStyled>

            <CharacterImageStyled>

                <img src="./img/character/graphic_erina_1.png" alt="personaje" />

            </CharacterImageStyled>

        </CharacterStyled>

    )
}

export default Character;
