import React from 'react';
import styled from 'styled-components';
import PresentationCard from './presentationCard';


const WelcomeStyled = styled.section`
    background-color: #363a43;
    padding: 80px 0;
`;

const WelcomeTitle = styled.h1`
    font-size: 65px;
    font-family: 'Comic Neue';
    color: #e85198;
    line-height: 1;
    font-weight: bold;
    text-align: center;
    margin-bottom: 60px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 3px;
`;

const PanelContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: 300px;
`;

const PanelLeftStyled = styled.div`
    width: 640px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const PanelRightStyled = styled.div`
    width: 320px;

    img {
        width: 100%;
        height: 100%;
    }
`;


function Welcome() {
    return (
        <WelcomeStyled className="welcome">

            <div className="container">

                <WelcomeTitle>Welcome to Rabi Ribi!</WelcomeTitle>

                <PresentationCard />

                <PanelContainerStyled>

                    <PanelLeftStyled>

                        <img src="./img/panel-placeholder.png" alt="Logo" />

                    </PanelLeftStyled>

                    <PanelRightStyled>

                        <img src="./img/panel-placeholder-2.png" alt="Logo" />

                    </PanelRightStyled>

                </PanelContainerStyled>

            </div>

        </WelcomeStyled>
    )
}

export default Welcome;