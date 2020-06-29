import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import MainHero from './components/mainHero';
import Video from './components/video';
import Welcome from './components/welcome';
import Poster from './components/poster';
import PagesViewer from './components/pagesViewer';
import Hero from './components/hero';
import AllCharacters from './components/allCharacters';
import Footer from './components/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>

        <Header />

          <Switch>

            <Route exact path="/" render={() => {
              return (
                <>
                  <MainHero />

                  <Video />
            
                  <Welcome />
            
                  <Poster />

                  <PagesViewer />
            
                </>
              )
            }}>
            </Route>

            <Route path="/characters" render={() => {
              return (
                <>
                  <Hero />
                
                  <AllCharacters />
                </>
              )
            }}>
            </Route>

          </Switch>

        <Footer />

      </Router>
    </>
  );
}

export default App;
