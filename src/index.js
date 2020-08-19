import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import RabiRibiApp from './RabiRibiApp';
import GlobalStyle from './theme/globalStyle';
import Theme from './theme/theme';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <ThemeProvider theme={Theme}>

    <React.StrictMode>
      <GlobalStyle />
      <RabiRibiApp />
    </React.StrictMode>

  </ThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
