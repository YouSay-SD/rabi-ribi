import React from 'react';
import styled from 'styled-components';

const WelcomeStyled = styled.section`
    background-color: white;
    padding: 80px 0;

    .container {
        max-width: 1040px;
        margin: auto;
        padding: 0 30px;

        .welcome__title {
            font-size: 65px;
            font-family: 'Comic Neue';
            color: #8A56BB;
            font-weight: bold;
            text-align: center;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 3px;
        }

        .panel {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around; 

            .panel__left-side {
                background-image: url('./img/panel-placeholder.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                width: 640px;
                height: 470px;
            }

            .panel__right-side {
                background-image: url('./img/panel-placeholder-2.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                width: 320px;
                height: 470px;
            }
        }
    }
    
`

function Welcome() {
    return (
        <WelcomeStyled className="welcome">

            <div className="container">

                <h1 className="welcome__title">Welcome to Rabi Ribi!</h1>

                <div className="panel">

                    <div className="panel__left-side">

                    

                    </div>

                    <div className="panel__right-side">

                    

                    </div>

                </div>

            </div>

        </WelcomeStyled>
    )
}

export default Welcome;