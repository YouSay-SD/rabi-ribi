import React from 'react';
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
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 99;
    font-family: 'Comic Neue';

    nav {
        border: 35px solid white;
        background-color: white;
        display: flex;
        height: 100%;

        /* Mobile */
        ${respondBelow.sm`
            border: none;
        `}
    }
`;

const MenuLeftSideStyled = styled.div`
    width: 50%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    /* Mobile */
    ${respondBelow.sm`
        width: 45%;
    `}

    ul {
        list-style: none;

        li {
            padding: 7px 0;

            a{
                text-decoration: none;
                font-size: 34px;
                color: #8A56BB;
                font-weight: bold;
                padding: 5px 20px;
                -webkit-text-fill-color: white;
                -webkit-text-stroke-width: 1px;
                position: relative;
                z-index: 2;
                transition: all .3s ease;

                &:before {
                    content: '';
                    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(138,86,176,1) 100%);
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
                    color: white;
                    -webkit-text-fill-color: white;
                    -webkit-text-stroke-width: 0;

                    &:before {
                        right: 0;
                        opacity: 1;
                    }
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
        width: 55%;
    `}
`;

const RabbitLoaderStyled = styled.div`
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: 46%;
    z-index: 99;
    background-color: #8A56BB;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    animation: ${ RabbitLoaderJump } 2s infinite ease;
    transition: all .3s ease;

    &:hover {
        background-color: white;
        animation: ${ RabbitLoaderJump } 1s infinite ease;

        .rabbit-ear-container {
            span {
                background-color: #8A56BB;
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
            background-color: #8A56BB;
            border-bottom: 3px solid #805D93;
            border-right: 3px solid #805D93;
        }
    }

    .rabbit-ear-container {
        width: 100%;
        display: flex;
        justify-content: center;

        span {
            background-color: white;
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
        background-color: white;
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
    return (
        <HeaderStyled>

            <nav>

                <MenuLeftSideStyled>

                    <ul>

                        <li><a href="www.google.com">News</a></li>
                        <li><a href="www.google.com">Game Data</a></li>
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

            <RabbitLoaderStyled>

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