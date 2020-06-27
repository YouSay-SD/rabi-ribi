import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Hero from './components/hero';
import Video from './components/video';
import Welcome from './components/welcome';
import Poster from './components/poster';
import PagesViewer from './components/pagesViewer';
import Footer from './components/footer';

function App() {
  return (
    <>

      <Header />
    
      <Hero />

      <Video />

      <Welcome />

      <Poster />

      <PagesViewer />

      <Footer />

    </>

  );
}

export default App;
