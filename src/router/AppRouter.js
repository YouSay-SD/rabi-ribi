import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';
import { HomeScreen } from '../components/screens/HomeScreen';
import { CharactersScreen } from '../components/screens/CharactersScreen';
import { GameDataScreen } from '../components/screens/GameDataScreen';

export const AppRouter = () => {
  return (
    <>
      <Router>

        <Navbar />

        <Switch>

          <Route exact path="/" component={ HomeScreen } />

          <Route exact path="/characters" component={ CharactersScreen } />

          <Route exact path="/game-data" component={ GameDataScreen } />
          
          <Redirect to="/" component={ HomeScreen } />
          
        </Switch>
        
      </Router>

    </>
  )
}
