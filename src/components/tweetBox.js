import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


const TweetBoxStyled = styled.div`
    box-shadow: 0 0 0 2px ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.white };
    border: dotted 1px ${ props => props.theme.colors.secondary };
    border-radius: 10px;
    padding: 15px;

    span {
        background-color: ${ props => props.theme.colors.secondary };
        padding: 0 20px 0 5px;
        transform: rotate(-4deg) translateX(-34px);
        display: inline-block;
        font-size: 18px;
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

            <a className="cta" href="www.google.com">Follow</a>

        </TweetBoxStyled>
    )
}

export default TweetBox;