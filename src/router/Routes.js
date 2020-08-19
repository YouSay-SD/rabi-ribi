import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

export const Routes = () => {
  return (
    <>

      <Navbar />

      <Switch>

        <Route exact path="/marvel" component={ } />
        

        <Redirect to="/" />
        
      </Switch>

    </>
  )
}
