import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    p {
        margin-bottom: 0;
    }

    body {
        font-family: ${ props => props.theme.fontFamily.primary };
        background-image: url('./img/background/bg-cross.gif');
        color: ${ props => props.theme.colors.white };
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
