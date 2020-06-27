import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const PageViewStyled = styled.article`
  
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
`;

function PageView({ img, alt, title }) {
    return (

        <PageViewStyled>

            <img src={ img } alt={ alt } title={ title } />

        </PageViewStyled>

    )
}

export default PageView;