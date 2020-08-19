import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { HomeScreen } from '../components/screens/HomeScreen';
import { CharactersScreen } from '../components/screens/CharactersScreen';

export const AppRouter = () => {
  return (
    <>

      <Navbar />

      <Switch>

        <Route exact path="/characters" component={ CharactersScreen } />
        

        <Redirect to="/" component={ HomeScreen } />
        
      </Switch>

    </>
  )
}
