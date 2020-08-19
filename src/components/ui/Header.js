import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { respondBelow } from '../../theme/breakPoints';
import { Navbar } from '../Navbar';

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

function Header() {

    // const [ menuStatus, setMenuStatus ] = useState( false );

    // const handleToggleClick = () => {
    //     setMenuStatus( !menuStatus );
    // }

    return (
        <HeaderStyled>

            <Navbar />


        </HeaderStyled>
    )
}

export default Header;