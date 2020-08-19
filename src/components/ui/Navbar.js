import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    &:before {
        content: '';
        background-color: ${ props => props.theme.colors.white };
        position: absolute;
        display: block;
        width: 100%;
        height: 50vw;
        left: 0;
        bottom: 10px;
        border-bottom: solid 2px #ff6c87;
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: skewY(-1.5deg);
        transform: skewY(-1.5deg);
    }

    &:after {
        content: '';
        background-color: rgba(${ props => props.theme.colorsRGB.rose }, .5);
        position: absolute;
        display: block;
        width: 1000px;
        height: 100vw;
        left: 0;
        bottom: 60px;
        -webkit-transform: skewY(-3deg);
        transform: skewY(-3deg);
    }

`;

const NavStyled = styled.nav`
  transform: rotate(-1.5deg) translate(35px, 16px);
  -webkit-transform: rotate(-1.5deg) translate(35px, 16px);

  ul {
    list-style: none;
    display: flex;

    li {
      padding-right: 25px;

      a {
        color: ${ props => props.theme.colors.secondary };
        display: inline-block;
        transition: all .3s ease;

        &:hover {
          transform: rotate(1deg) scale(1.1);
          color: ${ props => props.theme.colors.secondary };
          -webkit-text-fill-color: ${ props => props.theme.colors.white };
          -webkit-text-stroke-width: 1.5px;
        }
      }
    }
  }
`;

export const Navbar = () => {
  return (
    <HeaderStyled>

      <NavStyled>
        
        <ul>

          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/characters">Characters</NavLink></li>
          <li><NavLink exact to="/game-data">Game Data</NavLink></li>
          {/* <li><NavLink exact to="/game-data">Game</NavLink></li>
          <li><NavLink exact to="/game-data">About</NavLink></li> */}

        </ul>

      </NavStyled>

    </HeaderStyled>
  )
}
