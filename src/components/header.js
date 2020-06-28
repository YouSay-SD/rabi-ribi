import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const RabbitEarLeft = keyframes`
    0% { transform: rotate(-20deg) translate(-15px, 13px); }

    50% { transform: rotate(20deg) translate(32px, 4px); }

    100% { transform: rotate(-20deg) translate(-15px, 13px); }
`;

const RabbitEarRight = keyframes`
    0% { transform: rotate(20deg) translate(15px, 13px); }

    50% { transform: rotate(-20deg) translate(-32px, 4px); }

    100% { transform: rotate(20deg) translate(15px, 13px); }
`;

const RabbitLoaderJump = keyframes`
    0% { transform: translateY(0px); }

    50% { transform: translateY(-5px); }

    100% { transform: translateY(0px); }
`;

const HeaderStyled = styled.header`
    height: 100vh;
    top: 0;
    position: fixed;
    z-index: 99;
    font-family: ${ props => props.theme.fontFamily.primary };

    nav {
        width: 0vw;
        background-color: ${ props => props.theme.colors.white };
        display: flex;
        height: 100%;
        transition: all .3s ease;
        overflow: hidden;
        padding: 0;

        /* Mobile */
        ${respondBelow.sm`
            border: none;
        `}
    }

    /* Active */
    .active {
        width: 100vw;
        padding: 35px;

        ul {
            li {
                a { opacity: 1; }
            }
        }
    }
`;

const MenuLeftSideStyled = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${ props => props.theme.colors.white };
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    /* Mobile */
    ${respondBelow.sm`
        width: 55%;
    `}

    ul {
        list-style: none;

        li {
            padding: 7px 0;

            a {
                text-decoration: none;
                font-size: 34px;
                color: ${ props => props.theme.colors.primary };
                font-weight: ${ props => props.theme.fontWeight.bold };
                padding: 5px 20px;
                -webkit-text-fill-color: ${ props => props.theme.colors.white };
                -webkit-text-stroke-width: 1px;
                position: relative;
                z-index: 2;
                opacity: 0;
                transition: all .3s ease;

                /* Mobile */
                ${respondBelow.sm`
                    font-size: 21px;
                `}

                &:before {
                    content: '';
                    background: linear-gradient(90deg, rgba(${ props => props.theme.colorsRGB.white } ,1) 0%, rgba(${ props => props.theme.colorsRGB.primary } ,1) 100%);
                    width: 200%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    right: 200px;
                    border-radius: 15px;
                    transition: all .3s ease;
                    opacity: 0;
                    z-index: -1;
                }

                &:hover {
                    color: ${ props => props.theme.colors.white };
                    -webkit-text-fill-color: ${ props => props.theme.colors.white };
                    -webkit-text-stroke-width: 0;

                    &:before {
                        right: 0;
                        opacity: 1;
                    }
                }
            }

            .active {
                padding: 5px 20px;
                color: ${ props => props.theme.colors.white };
                -webkit-text-fill-color: ${ props => props.theme.colors.white };
                -webkit-text-stroke-width: 0;

                &:before {
                    right: 0;
                    opacity: 1;
                }
            }
        }
    }
`;

const MenuRightSideStyled = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    /* Mobile */
    ${respondBelow.sm`
        width: 45%;
    `}
`;

const RabbitLoaderStyled = styled.div`
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: 46%;
    z-index: 99;
    background-color: ${ props => props.theme.colors.primary };
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    animation: ${ RabbitLoaderJump } 2s infinite ease;
    transition: all .3s ease;

    /* Mobile */
    ${respondBelow.sm`
        top: 15px;
        left: 15px;
    `}

    &:hover {
        background-color: ${ props => props.theme.colors.white };
        animation: ${ RabbitLoaderJump } 1s infinite ease;

        .rabbit-ear-container {
            span {
                background-color: ${ props => props.theme.colors.primary };
                border-right: 2px solid #805D93;
            }

            .rabbit-ear-left {
                animation: ${ RabbitEarLeft } 1s infinite ease;
            }

            .rabbit-ear-right {
                animation: ${ RabbitEarRight } 1s infinite ease;
            }
        }

        .rabbit-body {
            background-color: ${ props => props.theme.colors.primary };
            border-bottom: 3px solid #805D93;
            border-right: 3px solid #805D93;
        }
    }

    .rabbit-ear-container {
        width: 100%;
        display: flex;
        justify-content: center;

        span {
            background-color: ${ props => props.theme.colors.white };
            width: 20px;
            height: 35px;
            display: inline-block;
            border-radius: 70%;
            border-right: 2px solid #ccc;
            z-index: 1;
            transition: all .3s ease;
        }

        .rabbit-ear-left {
            animation: ${ RabbitEarLeft } 2s infinite ease;
        }

        .rabbit-ear-right {
            animation: ${ RabbitEarRight } 2s infinite ease;
        }
    }

    .rabbit-body {
        background-color: ${ props => props.theme.colors.white };
        border-radius: 50%;
        width: 50px;
        height: 50px;
        border-bottom: 3px solid #ccc;
        border-right: 3px solid #ccc;
        z-index: 2;
        transition: all .3s ease;
    }

`;

function Header() {

    const [ menuStatus, setMenuStatus ] = useState( false );

    const handleToggleClick = () => {
        setMenuStatus( !menuStatus );
    }

    return (
        <HeaderStyled>

            <nav className={ ( menuStatus ) ? 'active' : '' }>

                <MenuLeftSideStyled>

                    <ul>

                        <li><NavLink exact to="/" onClick={ handleToggleClick }>Home</NavLink></li>
                        <li><NavLink to="/characters" onClick={ handleToggleClick }>Characters</NavLink></li>
                        <li><a href="www.google.com">Maps</a></li>
                        <li><a href="www.google.com">Achievements</a></li>
                        <li><a href="www.google.com">Minigames</a></li>
                        <li><a href="www.google.com">About</a></li>

                    </ul>

                </MenuLeftSideStyled>

                <MenuRightSideStyled>

                    <img src="./img/menu/test.jpg" alt="Erina" title="Erina" />

                </MenuRightSideStyled>

            </nav>

            <RabbitLoaderStyled onClick={ handleToggleClick }>

                <div className="rabbit-ear-container">

                    <span className="rabbit-ear-left"></span>
                    <span className="rabbit-ear-right"></span>

                </div>

                <div className="rabbit-body"></div>

            </RabbitLoaderStyled>

        </HeaderStyled>
    )
}

export default Header;