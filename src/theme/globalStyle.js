import { createGlobalStyle } from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    p, h3 {
        margin-bottom: 0;
    }

    body {
        font-family: ${ props => props.theme.fontFamily.primary };
        background-image: url('./img/background/bg-cross.gif');
        color: ${ props => props.theme.colors.white };

        &::-webkit-scrollbar {
            width: 12px; 
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${ props => props.theme.colors.secondary };
            border-radius: 5px;
        }
    }

    section {
        margin: 70px 0;
        padding: 70px 0;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }
    }

    h1 {
        font-size: 50px;
        font-weight: ${ props => props.theme.fontWeight.bold };
        text-align: center;
        padding: 10px 20px;
        margin-bottom: 40px;
        color: ${ props => props.theme.colors.secondary };
        -webkit-text-fill-color: ${ props => props.theme.colors.white };
        -webkit-text-stroke-width: 2px;
        
        /* Mobile */
        ${respondBelow.sm`
            font-size: 35px;
            -webkit-text-stroke-width: 2px;
        `} 
    }

    h2 {
        font-weight: ${ props => props.theme.fontWeight.bold };
        text-align: center;
        padding: 10px 60px;
        color: ${ props => props.theme.colors.secondary };
        -webkit-text-fill-color: ${ props => props.theme.colors.white };
        -webkit-text-stroke-width: 1.5px;

        /* Mobile */
        ${respondBelow.sm`
            font-size: 22px;
            padding: 10px 20px;
            -webkit-text-stroke-width: 1px;
        `} 
    }

    h3 {
        font-weight: ${ props => props.theme.fontWeight.bold };
        font-size: 20px;
        text-align: center;
        padding: 7px 0;
        display: inline-block;
        color: ${ props => props.theme.colors.secondary };
        -webkit-text-fill-color: ${ props => props.theme.colors.white };
        -webkit-text-stroke-width: 1.5px;
    }

    /* Background Rose */
    .rose-background {
        background-image: url('./img/background/bg-pink.png');
        background-position: center top;
        position: relative;

        /* Cloud Top */
        &:before {
            content: '';
            background-image: url('./img/background/frame-cloud-top.png');
            background-position: center bottom;
            background-repeat: repeat-x;
            position: absolute;
            width: 100%;
            height: 68px;
            top: -68px;
            right: 0%;
        }

        /* Cloud Bottom */
        &:after {
            content: '';
            background-image: url('./img/background/frame-cloud-bottom.png');
            background-position: center bottom;
            background-repeat: repeat-x;
            position: absolute;
            width: 100%;
            height: 68px;
            bottom: -68px;
            right: 0%;
        }
    }

    /* Cloud Bottom */
    .cloud-bottom {
        /* Cloud Bottom */
        &:after {
            content: '';
            background-image: url('./img/background/frame-cloud-bottom.png');
            background-position: center bottom;
            background-repeat: repeat-x;
            position: absolute;
            width: 100%;
            height: 68px;
            bottom: -68px;
            right: 0%;
        }
    }

    /* Rose Wave */
    .rose-wave {
        background-color: ${ props => props.theme.colors.secondary };
        background-image: url('./img/character/frame_wave_top.png'),url('./img/character/frame_wave_bottom.png'),url('./img/character/bg_pad_big.png');
        background-position: top center,bottom center,center;
        background-repeat: repeat-x,repeat-x,repeat;
        -webkit-mask-image: url('./img/character/mask_wave_top.png'),url('./img/character/box.png'),url('./img/character/mask_wave_bottom.png');
        -webkit-mask-position: top,center,bottom;
        mask-position: top,center,bottom;
        -webkit-mask-repeat: repeat-x,repeat-x,repeat-x;
        mask-repeat: repeat-x,repeat-x,repeat-x;
        -webkit-mask-size: auto,100% calc(100% - 94px),auto;
        mask-size: auto,100% calc(100% - 94px),auto;
        width: 100%;
        height: 400px;
        position: absolute;
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);

        /* Mobile */
        ${respondBelow.sm`
            top: 0;
            transform: initial;
            height: 440px;
        `} 
    }

    /* Box Title */
    .box-title {
        position: relative;
        z-index: 1;

        &:before {
            content: '';
            background-image: url('./img/background/bg-stripe.png');
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: -1;
            transform: translate(10px,10px);
        }

        &:after {
            content: '';
            background-color: white;
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: -1;
        }
    }
`;

export default GlobalStyle;
