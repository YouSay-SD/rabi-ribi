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

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center center;

        /* Tablet */
        ${respondBelow.md`
            height: 220px;
        `}

        /* Mobile */
        ${respondBelow.sm`
            height: 180px;
        `}
    }

    span {
        width: 100%;
        font-size: 20px;
        padding: 7px 0;
        display: inline-block;
        color: ${ props => props.theme.colors.secondary };
        -webkit-text-fill-color: ${ props => props.theme.colors.white };
        -webkit-text-stroke-width: 1.5px;
    }
`;

function PageView({ img, alt, title }) {
    return (

        <PageViewStyled>

            <img src={ img } alt={ alt } title={ title } />

            <span>Page:</span>

        </PageViewStyled>

    )
}

export default PageView;