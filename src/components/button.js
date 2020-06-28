import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.a`
    background-image: linear-gradient(-7deg,transparent 50%,rgba(255,177,200,.3) 50%);
    width: 100%;
    padding: 2px 15px;
    text-align: center;
    display: inline-block;
    color: ${ props => props.theme.colors.secondary };
    border: solid 1px ${ props => props.theme.colors.secondary };
    transition: all .5s ease;
    box-shadow: 0 2px 0 0 rgba(255,108,135,.2);
    border-radius: 5rem;
    font-size: 18px;
    font-weight: ${ props => props.theme.fontWeight.bold };
    font-family: ${ props => props.theme.fontFamily.secondary };

    &:hover {
        color: ${ props => props.theme.colors.white };
        background-color: ${ props => props.theme.colors.secondary };
    }
`;

function Button(props) {
    return (
        <ButtonStyled href={ props.url }>{ props.title }</ButtonStyled>
    )
}

export default Button;