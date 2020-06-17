import React from 'react';
import styled from 'styled-components';

const VideoStyled = styled.section`
    font-family: 'Comic Neue';
    width: 100%;
    height: 700px;
    overflow: hidden;
    position: relative;
    border-top: 10px solid white;
    border-bottom: 10px solid #8A56BB;

    video {
        width: 1920px;
        height: 1080px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width: 991px) {
        height: 450px;

        video {
            width: 100vw;
            height: 100vh;
        }
    }

    @media screen and (max-width: 767px) {
        height: 200px;
    }
    
`

function Video() {
    return (
        <VideoStyled>

            <video width="600" height="400" muted="" loop="" autoplay="" src="./video/Rabi-Ribi-Trailer.mp4" type="video/mp4">
            </video>            

        </VideoStyled>
    )
}

export default Video;