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
        font-family: 'Comic Neue';
        background-image: url('./img/background/bg-cross.gif');
    }

    /* Background Rose */
    .rose-background {
        background-image: url('./img/background/bg-pink.png');
        background-position: center top;
        padding: 70px 0;
        margin: 70px 0;
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
`;

export default GlobalStyle;
