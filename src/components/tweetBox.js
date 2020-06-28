import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Button from './button';

const TweetBoxStyled = styled.div`
    box-shadow: 0 0 0 2px ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.white };
    border: dotted 1px ${ props => props.theme.colors.secondary };
    border-radius: 10px;
    padding: 15px;

    span {
        background-color: ${ props => props.theme.colors.secondary };
        padding: 2px 20px 0 5px;
        transform: rotate(-4deg) translateX(-34px);
        display: inline-block;
        font-size: 18px;

        /* Mobile */
        ${respondBelow.sm`
            transform: rotate(-4deg) translateX(-25px);
        `}
    }
`;

function TweetBox() {
    return (
        <TweetBoxStyled>

            <span>Twitter</span>

            <TwitterTimelineEmbed
                sourceType="profile"
                userId={2587865797}
                options={{height: 400}}
                noScrollbar
                noHeader
                noFooter
            />

            <Button url={ 'www.google.com' } title={ 'Follow' }/>

        </TweetBoxStyled>
    )
}

export default TweetBox;