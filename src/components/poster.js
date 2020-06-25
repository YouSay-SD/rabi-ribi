import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const PosterStyled = styled.section`
   
`;

const PosterContainerStyled = styled.div`
    display: flex;
`;

const PosterLeftStyled = styled.div`
    width: 70%;

    img {
        width: 100%;
    }
`;

const PosterRightStyled = styled.div`
    width: 30%;

    & > img {
        width: 100%;
        transform: scale(1.4) translateX(-46px);
        margin-bottom: 30px;
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

                    </PosterRightStyled>

                </PosterContainerStyled>

            </div>

        </PosterStyled>
    )
}

export default Poster;