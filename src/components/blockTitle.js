import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const BlockTitleStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    /* Mobile */
    ${respondBelow.sm`
        margin-bottom: 20px;
    `}

    h2 {
        position: relative;
        z-index: 1;

        &:before {
            content: '';
            background-image: url('./img/background/bg-stripe.png');
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: -1;
            transform: translate(10px,10px);
        }

        &:after {
            content: '';
            background-color: white;
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: -1;
        }
    }
`;

function BlockTitle(props) {
    return (

        <BlockTitleStyled>

            <h2>{ props.title }</h2>

        </BlockTitleStyled>

    )
}

export default BlockTitle;
