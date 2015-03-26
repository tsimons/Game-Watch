import { React } from 'react';
import { App } from './app'
import { Home } from './views/home';
import { Timer } from './views/timer';
import { Router } from 'react-router';

var Route = Router.Route
  , DefaultRoute = Router.DefaultRoute
;


var routes = (
  <Route path="/" handler={App} name="app">
    <Route path="home" handler={Home} name="home" />
    <Route path="timer" handler={Timer} name="timer" />
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});