import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';
import Slider from 'react-slick';
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

const characterList = [
    {
        name: 'Erina',
        img: './img/character/graphic_erina_1.png',
        description: `Erina is the main protagonist and only known bunny on Rabi Rabi Island. She has been transformed into a human for unknown reasons.
        She loves her master, Rumi, and wants to help her find her sister, Miru, along with restoring the peace on Rabi Rabi Island.
        Erina encounters Ribbon the fairy after getting lost in the Spectral Cave. They teamed up togather after Erina agreed to help her rescue her friends from a strange blonde haired girl.
        She is both being chased by the UPRPRC and mistaken for being a member of the UPRPRC due to her bunny ears.
        Although formal and polite when meeting new people, she has a tendency to accidentally anger them.
        Erina is six months old as a bunny or about 15-16 years old as a human.`
    },
    {
        name: 'Ribbon',
        img: './img/character/graphic_ribbon_1.png',
        description: `Ribbon is a fairy that Erina runs into as she is trying to help her friends, Pixie and Lili.
        She is very tiny but does not like to be called as such.
        She considers Erina to be her friend/family/master and follows her around on her journey.
        Ribbon is originally from the forest and enjoys her unrestricted use of magic during her travels with Erina.
        Being the youngest in her group of friends, she earned the nickname of “Ribi”. Only her fairy friends are allowed to use that name, though.`
    },
    {
        name: 'Ashuri',
        img: './img/character/graphic_ashuri_1.png',
        description: `Ashuri is a magic user obsessed with research. Upon meeting Erina for the first time, all she wants to do is study her.
        Although she likes teasing Ribbon a lot, she is very dependable. She's also one of Rumi's close friends.
        When Ashuri and Erina met a second time, the sky bunny phenomenon happened. She was silly enough to think that it would not affect her as "there were no bunnies around".`
    }
]

const chibiCharacterList = [
    {
        img: './img/character-chibi/erina.png'
    },
    {
        img: './img/character-chibi/ribbon.png'
    },
    {
        img: './img/character-chibi/ashuri.png'
    }
]

function AllCharacters() {

    const [topNav, setTopNav] = useState(null); 
    const [bottomNav, setBottomNav] = useState(null);

    let topSlider = [],
        bottomSlider = [];

    useEffect(() => {
        setTopNav(topSlider);
        setBottomNav(bottomSlider);   
    }, [topSlider, bottomSlider]);
    
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: 'character-slider'
    }

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

                    <Slider {...settings}>

                        {
                            characterList.map(({ name, img, description }) => {
                                return (
                                    <Character name={ name } img={ img } description={ description } />
                                )
                            })
                        }

                    </Slider>

                </CharactersSliderStyled>

            </div>

            <span></span>
        </AllCharactersStyled>


    )
}

export default AllCharacters;
