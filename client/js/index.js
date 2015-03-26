var React = require('react')
  , App = require('./app')
  , Home = require('./views/home')
  , Timer = require('./views/timer')

  // Router
  , Router = require('react-router')
  , Route = Router.Route
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