import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    position: fixed;
    z-index: 99;
    font-family: 'Comic Neue';

    nav {
        ul {
            list-style: none;

            li {
                padding: 7px 0;

                a{
                    text-decoration: none;
                    font-size: 20px;
                    color: #8A56BB;
                    font-weight: bold;
                    padding: 5px 20px;
                    -webkit-text-fill-color: white;
                    -webkit-text-stroke-width: 1px;
                    position: relative;
                    transition: all .3s ease;

                    &:before {
                        content: '';
                        background-color: #8A56BB;
                        width: 200%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        right: 200px;
                        z-index: -1;
                        border-radius: 15px;
                        transition: all .3s ease;
                    }

                    &:hover {
                        color: white;
                        -webkit-text-fill-color: white;
                        -webkit-text-stroke-width: 0;

                        &:before {
                            right: 0;
                        }
                    }
                }
            }
        }
    }
    
`

function Header() {
    return (
        <HeaderStyled>

            <nav>

                <ul>

                    <li><a href="#">News</a></li>
                    <li><a href="#">Game Data</a></li>
                    <li><a href="#">Maps</a></li>
                    <li><a href="#">Achievements</a></li>
                    <li><a href="#">Minigames</a></li>
                    <li><a href="#">About</a></li>

                </ul>

            </nav>

        </HeaderStyled>
    )
}

export default Header;