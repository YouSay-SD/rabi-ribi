import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';
import TweetBox from './tweetBox';



const PosterStyled = styled.section`
   
`;

const PosterContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const PosterLeftStyled = styled.div`
    width: 70%;

    /* Mobile */
    ${respondBelow.sm`
        width: 100%;
        order: 2;
    `}

    img {
        width: 100%;
    }
`;

const PosterRightStyled = styled.div`
    width: 28%;

    /* Mobile */
    ${respondBelow.sm`
        width: 100%;
        margin-bottom: 30px;
    `}

    & > img {
        width: 100%;
        transform: scale(1.4) translateX(-46px);
        margin-bottom: 30px;

        /* Mobile */
        ${respondBelow.sm`
            transform: initial;
        `}
    }
`;

const PosterPreviewStyled = styled.div`
    img {
        width: 100%;
    }
`;

function Poster() {
    return (
        <PosterStyled>

            <div className="container">

                <PosterContainerStyled>

                    <PosterLeftStyled>

                        <img src="./img/poster/poster.jpg" alt="Poster" title="Poster" />    

                    </PosterLeftStyled>

                    <PosterRightStyled>

                        <img src="./img/logo/logo.png" alt="Logo" title="Logo" />

                        <PosterPreviewStyled>

                            <img src="./img/poster/poster.webp" alt="View Video" title="View Video" />

                        </PosterPreviewStyled>

                        <TweetBox />

                    </PosterRightStyled>
                    
                </PosterContainerStyled>

            </div>

        </PosterStyled>
    )
}

export default Poster;