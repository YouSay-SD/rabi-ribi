import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const PageViewStyled = styled.article`
    text-align: center;
    box-shadow: 0 0 0 2px #ffffff;
    background-color: ${ props => props.theme.colors.white };
    border: dotted 1px ${ props => props.theme.colors.secondary };
    border-radius: 0 0 50px 50px;
    padding: 5px;
    position: relative;
    transition: all .5s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const PageViewTitleStyled = styled.h3`
    width: 100%;
    transition: all .5s ease;

    ${ PageViewStyled }:hover & {
        transform: scale(1.1);
    }
`;

const PageViewImgStyled = styled.div`
    position: relative;
    transition: all .5s ease;

    &:before {
        content: '';
        transition: all .5s ease;
        background-color: rgba(${ props => props.theme.colorsRGB.secondary }, .5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        opacity: 0;
    }

    ${ PageViewStyled }:hover & {
        &:before {
            opacity: 1;
        }
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center center;
        position: relative;

        ${ PageViewStyled }:hover & {
            filter: blur(3px);
        }

        /* Tablet */
        ${respondBelow.md`
            height: 220px;
        `}

        /* Mobile */
        ${respondBelow.sm`
            height: 180px;
        `}
    }
`;

const PageViewCopyStyled = styled.p`
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
    z-index: 2;
    opacity: 0;
    transition: all .5s ease;

    ${ PageViewStyled }:hover & {
        opacity: 1;
    }

    /* Mobile */
    ${respondBelow.sm`
        font-size: 13px;
    `}
`;

function PageView({ img, alt, title }) {
    return (

        <PageViewStyled>

            <PageViewImgStyled>

                <img src={ img } alt={ alt } title={ title } />

            </PageViewImgStyled>

            <PageViewTitleStyled>Page:</PageViewTitleStyled>

            <PageViewCopyStyled>Dodge bullets, missiles and lasers in battle as you wrap your head around that bunny girl costume! Combo away with your mighty...</PageViewCopyStyled>

        </PageViewStyled>

    )
}

export default PageView;