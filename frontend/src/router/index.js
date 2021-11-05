import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../container/header/Header';
import Nav from '../container/Nav/Nav';


import Home from '../page/home';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Nav/>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
