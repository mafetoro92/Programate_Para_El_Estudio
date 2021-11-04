import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../page/home';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
