import React from 'react';
import styled from 'styled-components';

const VideoStyled = styled.section`
    font-family: 'Comic Neue';
    width: 100%;
    height: 600px;
    overflow: hidden;
    position: relative;
    border-top: 10px solid white;
    border-bottom: 10px solid #e85198;

    video {
        width: 1920px;
        height: 1080px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .video__overlay {
        background: rgba(255,255,255,0.1) url('./img/movie_overlay.png') repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .5s ease;

        img {
            width: 100px;
            opacity: .4;
            transition: all .5s ease;
        }

        &:hover {
            background: rgba(255,255,255,0.5) url('./img/movie_overlay.png') repeat;

            img {
                opacity: .8;
            }
        }
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

            <video width="600" height="400" muted="true" loop="true" autoplay="" src="./video/Rabi-Ribi-Trailer.mp4" type="video/mp4">
            </video>  

            <a href="https://www.youtube.com/watch?reload=9&v=ElWOuxkBFPU">
                <div className="video__overlay">

                    <img src="./img/movie_play.png" alt="Play" title="Play" />   
                    
                </div>          
            </a>    

        </VideoStyled>
    )
}

export default Video;