import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';
import Character from './character';

const AllCharactersStyled = styled.section`
    position: relative;

    span {
        background-color: ${ props => props.theme.colors.secondary };
        background-image: url('./img/character/frame_wave_top.png'),url('./img/character/frame_wave_bottom.png'),url('./img/character/bg_pad_big.png');
        background-position: top center,bottom center,center;
        background-repeat: repeat-x,repeat-x,repeat;
        -webkit-mask-image: url('./img/character/mask_wave_top.png'),url('./img/character/box.png'),url('./img/character/mask_wave_bottom.png');
        -webkit-mask-position: top,center,bottom;
        mask-position: top,center,bottom;
        -webkit-mask-repeat: repeat-x,repeat-x,repeat-x;
        mask-repeat: repeat-x,repeat-x,repeat-x;
        -webkit-mask-size: auto,100% calc(100% - 94px),auto;
        mask-size: auto,100% calc(100% - 94px),auto;
        width: 100%;
        height: 400px;
        position: absolute;
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const AllCharactersTitleStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;

const AllCharactersSliderStyled = styled.div`
    display: flex;
    justify-content: center;
`;

const ChibiCharacter = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${ props => props.theme.colors.secondary };
    margin: 0 10px;

    img {
        width: 100%;
    }
`;

const CharactersSliderStyled = styled.div`

`;

function AllCharacters() {
    return (

        <AllCharactersStyled className="">

            <div className="container">

                <AllCharactersTitleStyled>

                    <h2 className="box-title">Characters:</h2>

                </AllCharactersTitleStyled>

                <AllCharactersSliderStyled>

                    <ChibiCharacter>

                        <img src="./img/character-chibi/erina.png" alt="name"/>

                    </ChibiCharacter>

                    <ChibiCharacter>

                        <img src="./img/character-chibi/erina.png" alt="name"/>

                    </ChibiCharacter>

                    <ChibiCharacter>

                        <img src="./img/character-chibi/erina.png" alt="name"/>

                    </ChibiCharacter>

                    <ChibiCharacter>

                        <img src="./img/character-chibi/erina.png" alt="name"/>

                    </ChibiCharacter>

                    <ChibiCharacter>

                        <img src="./img/character-chibi/erina.png" alt="name"/>

                    </ChibiCharacter>

                    <ChibiCharacter>

                        <img src="./img/character-chibi/erina.png" alt="name"/>

                    </ChibiCharacter>

                    <ChibiCharacter>

                        <img src="./img/character-chibi/erina.png" alt="name"/>

                    </ChibiCharacter>

                    <ChibiCharacter>

                        <img src="./img/character-chibi/erina.png" alt="name"/>

                    </ChibiCharacter>

                    <ChibiCharacter>

                        <img src="./img/character-chibi/erina.png" alt="name"/>

                    </ChibiCharacter>

                </AllCharactersSliderStyled>

                <CharactersSliderStyled>

                    <Character />

                </CharactersSliderStyled>

            </div>

            <span></span>

        </AllCharactersStyled>

    )
}

export default AllCharacters;
