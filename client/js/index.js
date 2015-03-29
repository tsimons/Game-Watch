import React from 'react';
import { App } from './app'
import Home from './views/home';
import TimerView from './views/timer';
import Router, { Route, DefaultRoute } from 'react-router';

var routes = (
  <Route path="/" handler={App} name="app">
    <Route path="home" handler={Home} name="home" />
    <Route path="timer" handler={TimerView} name="timer" />
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});