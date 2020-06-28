import React, { useState, useEffect, useRef }from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';
import Slider from 'react-slick';
import Character from './character';
import ChibiCharacter from './chibiCharacter';

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

const ChibiCharactersSliderStyled = styled.div`
    .slick-current {
        div {
            div {
                background-color: initial;
            }
        }
    }
`;

const CharactersSliderStyled = styled.div`
`;

const characterList = [
    {
        key: 1,
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
        key: 2,
        name: 'Ribbon',
        img: './img/character/graphic_ribbon_1.png',
        description: `Ribbon is a fairy that Erina runs into as she is trying to help her friends, Pixie and Lili.
        She is very tiny but does not like to be called as such.
        She considers Erina to be her friend/family/master and follows her around on her journey.
        Ribbon is originally from the forest and enjoys her unrestricted use of magic during her travels with Erina.
        Being the youngest in her group of friends, she earned the nickname of “Ribi”. Only her fairy friends are allowed to use that name, though.`
    },
    {
        key: 3,
        name: 'Ashuri',
        img: './img/character/graphic_ashuri_1.png',
        description: `Ashuri is a magic user obsessed with research. Upon meeting Erina for the first time, all she wants to do is study her.
        Although she likes teasing Ribbon a lot, she is very dependable. She's also one of Rumi's close friends.
        When Ashuri and Erina met a second time, the sky bunny phenomenon happened. She was silly enough to think that it would not affect her as "there were no bunnies around".`
    },
    {
        key: 4,
        name: 'Pandora',
        img: './img/character/graphic_pandora_1.png',
        description: `Pandora is the protector of the Pyramids and has been around for hundreds of years.
        Due to recent events and the disturbance in the undergrounds, her pyramid rose up to the sruface after being buried down for hundreds of years. She gets angry when it becomes filled with tourists roaming all around the place.
        Demands to be called Princess Pandora even though she is not actually a princess. She thinks Erina is Rumi's slave because she cannot tell the difference between a pet and a slave.
        Once she gets to Rabi Rabi Town, she quickly becomes friends with Kotri. She even asks Kotri to teach her dancing so she could feel a little more like a princess.`
    },
    {
        key: 5,
        name: 'Rita',
        img: './img/character/graphic_rita_1.png',
        description: `Pandora is the protector of the Pyramids and has been around for hundreds of years.
        Due to recent events and the disturbance in the undergrounds, her pyramid rose up to the sruface after being buried down for hundreds of years. She gets angry when it becomes filled with tourists roaming all around the place.
        Demands to be called Princess Pandora even though she is not actually a princess. She thinks Erina is Rumi's slave because she cannot tell the difference between a pet and a slave.
        Once she gets to Rabi Rabi Town, she quickly becomes friends with Kotri. She even asks Kotri to teach her dancing so she could feel a little more like a princess.`
    },
    {
        key: 6,
        name: 'Saya',
        img: './img/character/graphic_saya_1.png',
        description: `Pandora is the protector of the Pyramids and has been around for hundreds of years.
        Due to recent events and the disturbance in the undergrounds, her pyramid rose up to the sruface after being buried down for hundreds of years. She gets angry when it becomes filled with tourists roaming all around the place.
        Demands to be called Princess Pandora even though she is not actually a princess. She thinks Erina is Rumi's slave because she cannot tell the difference between a pet and a slave.
        Once she gets to Rabi Rabi Town, she quickly becomes friends with Kotri. She even asks Kotri to teach her dancing so she could feel a little more like a princess.`
    },
    {
        key: 7,
        name: 'Cocoa',
        img: './img/character/graphic_cocoa_1.png',
        description: `Pandora is the protector of the Pyramids and has been around for hundreds of years.
        Due to recent events and the disturbance in the undergrounds, her pyramid rose up to the sruface after being buried down for hundreds of years. She gets angry when it becomes filled with tourists roaming all around the place.
        Demands to be called Princess Pandora even though she is not actually a princess. She thinks Erina is Rumi's slave because she cannot tell the difference between a pet and a slave.
        Once she gets to Rabi Rabi Town, she quickly becomes friends with Kotri. She even asks Kotri to teach her dancing so she could feel a little more like a princess.`
    },
    {
        key: 8,
        name: 'Rumi',
        img: './img/character/graphic_rumi_1.png',
        description: `Pandora is the protector of the Pyramids and has been around for hundreds of years.
        Due to recent events and the disturbance in the undergrounds, her pyramid rose up to the sruface after being buried down for hundreds of years. She gets angry when it becomes filled with tourists roaming all around the place.
        Demands to be called Princess Pandora even though she is not actually a princess. She thinks Erina is Rumi's slave because she cannot tell the difference between a pet and a slave.
        Once she gets to Rabi Rabi Town, she quickly becomes friends with Kotri. She even asks Kotri to teach her dancing so she could feel a little more like a princess.`
    },
    {
        key: 9,
        name: 'Miru',
        img: './img/character/graphic_miru_1.png',
        description: `Pandora is the protector of the Pyramids and has been around for hundreds of years.
        Due to recent events and the disturbance in the undergrounds, her pyramid rose up to the sruface after being buried down for hundreds of years. She gets angry when it becomes filled with tourists roaming all around the place.
        Demands to be called Princess Pandora even though she is not actually a princess. She thinks Erina is Rumi's slave because she cannot tell the difference between a pet and a slave.
        Once she gets to Rabi Rabi Town, she quickly becomes friends with Kotri. She even asks Kotri to teach her dancing so she could feel a little more like a princess.`
    },
    {
        key: 10,
        name: 'Miriam',
        img: './img/character/graphic_miriam_1.png',
        description: `Pandora is the protector of the Pyramids and has been around for hundreds of years.
        Due to recent events and the disturbance in the undergrounds, her pyramid rose up to the sruface after being buried down for hundreds of years. She gets angry when it becomes filled with tourists roaming all around the place.
        Demands to be called Princess Pandora even though she is not actually a princess. She thinks Erina is Rumi's slave because she cannot tell the difference between a pet and a slave.
        Once she gets to Rabi Rabi Town, she quickly becomes friends with Kotri. She even asks Kotri to teach her dancing so she could feel a little more like a princess.`
    },
    {
        key: 11,
        name: 'Kotri',
        img: './img/character/graphic_kotri_1.png',
        description: `Pandora is the protector of the Pyramids and has been around for hundreds of years.
        Due to recent events and the disturbance in the undergrounds, her pyramid rose up to the sruface after being buried down for hundreds of years. She gets angry when it becomes filled with tourists roaming all around the place.
        Demands to be called Princess Pandora even though she is not actually a princess. She thinks Erina is Rumi's slave because she cannot tell the difference between a pet and a slave.
        Once she gets to Rabi Rabi Town, she quickly becomes friends with Kotri. She even asks Kotri to teach her dancing so she could feel a little more like a princess.`
    },
    {
        key: 12,
        name: 'Irisu',
        img: './img/character/graphic_irisu_1.png',
        description: `Pandora is the protector of the Pyramids and has been around for hundreds of years.
        Due to recent events and the disturbance in the undergrounds, her pyramid rose up to the sruface after being buried down for hundreds of years. She gets angry when it becomes filled with tourists roaming all around the place.
        Demands to be called Princess Pandora even though she is not actually a princess. She thinks Erina is Rumi's slave because she cannot tell the difference between a pet and a slave.
        Once she gets to Rabi Rabi Town, she quickly becomes friends with Kotri. She even asks Kotri to teach her dancing so she could feel a little more like a princess.`
    }
]

const chibiCharacterList = [
    {
        key: 1,
        img: './img/character-chibi/erina.png',
        name: 'Erina'
    },
    {
        key: 2,
        img: './img/character-chibi/ribbon.png',
        name: 'Ribbon'
    },
    {
        key: 3,
        img: './img/character-chibi/ashuri.png',
        name: 'Ashuri'
    },
    {
        key: 4,
        img: './img/character-chibi/pandora.png',
        name: 'Pandora'
    },
    {
        key: 5,
        img: './img/character-chibi/rita.png',
        name: 'Rita'
    },
    {
        key: 6,
        img: './img/character-chibi/saya.png',
        name: 'Saya'
    },
    {
        key: 7,
        img: './img/character-chibi/cocoa.png',
        name: 'Cocoa'
    },
    {
        key: 8,
        img: './img/character-chibi/rumi.png',
        name: 'Rumi'
    },
    {
        key: 9,
        img: './img/character-chibi/miru.png',
        name: 'Miru'
    },
    {
        key: 10,
        img: './img/character-chibi/miriam.png',
        name: 'Miriam'
    },
    {
        key: 11,
        img: './img/character-chibi/Kotri.png',
        name: 'Kotri'
    },
    {
        key: 12,
        img: './img/character-chibi/irisu.png',
        name: 'Irisu'
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
    
    return (

        <AllCharactersStyled>

            <div className="container">

                <AllCharactersTitleStyled>

                    <h2 className="box-title">Characters:</h2>

                </AllCharactersTitleStyled>

                <ChibiCharactersSliderStyled>

                    <Slider 
                        asNavFor={topNav}
                        ref={slider => {
                            bottomSlider = slider;
                        }}
                        slidesToShow={9}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        className='chibi-character-slick'
                    >

                        {
                            chibiCharacterList.map(({ key, img, name }) => {
                                return (
                                    <ChibiCharacter key={ key } img={ img } name={ name } />
                                )
                            })
                        }

                    </Slider>

                </ChibiCharactersSliderStyled>

                <CharactersSliderStyled>

                    <Slider
                        asNavFor={bottomNav}
                        ref={slider => {
                            topSlider = slider;
                        }}                    
                    >
                        {
                            characterList.map(({ key, name, img, description }) => {
                                return (
                                    <Character key={ key } name={ name } img={ img } description={ description } />
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
