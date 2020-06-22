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
    }
`;

export default GlobalStyle;
