import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '@/routes/Home';
import { Article } from '@/routes/Article';

export const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:url" component={Article} />
      </Switch>
    </>
  );
};
