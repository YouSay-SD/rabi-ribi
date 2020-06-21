import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const VideoStyled = styled.section`
    font-family: 'Comic Neue';
    width: 100%;
    height: 600px;
    overflow: hidden;
    position: relative;
    border-top: 10px solid white;
    border-bottom: 10px solid #e85198;

    /* Tablet */
    ${respondBelow.md`
        height: 450px; 
    `}

    /* Mobile */
    ${respondBelow.sm`
        height: 200px; 
    `}
`;

const VideoLoopStyled = styled.video`
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;

    /* Tablet */
    ${respondBelow.md`
        width: 100vw;
        height: 100vh; 
    `}
`;

const VideoOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,0.1) url('./img/movie_overlay.png') repeat;
    top: 0;
    right: 0;
    transition: all .5s ease;

    :hover {
        background: rgba(255,255,255,0.5) url('./img/movie_overlay.png') repeat;
    }
`;

const ImgPlay = styled.img`
    width: 100px;
    opacity: .4;
    transition: all .5s ease;

    ${ VideoOverlay }:hover & {
        opacity: .8;
    }
`;

function Video() {
    return (
        <VideoStyled>
        
            <VideoLoopStyled muted loop autoPlay src="./video/Rabi-Ribi-Trailer.mp4" type="video/mp4" />
        
            <a href="https://www.youtube.com/watch?reload=9&v=ElWOuxkBFPU">

                <VideoOverlay>

                    <ImgPlay src="./img/movie_play.png" alt="Play" title="Play" />   
                    
                </VideoOverlay>     

            </a>    

        </VideoStyled>
    )
}

export default Video;