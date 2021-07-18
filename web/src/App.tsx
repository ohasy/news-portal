import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from '@/routes/Home';
import { Article } from '@/routes/Article';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:url" component={Article} />
      </Switch>
    </BrowserRouter>
  );
};
