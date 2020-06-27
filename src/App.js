import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>

        <Header />

          <Switch>

            <Route exact path="/" render={() => {
              return (
                <>
                  <Hero />

                  <Video />
            
                  <Welcome />
            
                  <Poster />

                  <PagesViewer />
            
                </>
              )

            }}>
            </Route>

            <Route path="/characters" render={() => {


            }}>
            </Route>

          </Switch>

        <Footer />

      </Router>
    </>
  );
}

export default App;
