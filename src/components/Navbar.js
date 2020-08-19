import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

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
    <NavStyled>
      
      <ul>

        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/characters">Characters</NavLink></li>
        <li><NavLink exact to="/game-data">Data Base</NavLink></li>
        <li><a href="www.google.com">Game</a></li>
        <li><a href="www.google.com">About</a></li>

      </ul>

    </NavStyled>
  )
}
