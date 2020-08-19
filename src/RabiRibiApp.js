import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import { AppRouter } from './router/AppRouter';


function App() {
  return (
    <>

        <AppRouter />

        <Footer />

    </>
  );
}

export default App;
