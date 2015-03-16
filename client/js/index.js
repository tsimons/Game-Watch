var React = require('react')
  , App = require('./app')
  , Home = require('./home')

  // Router
  , Router = require('react-router')
  , Route = Router.Route
  , DefaultRoute = Router.DefaultRoute
;

var routes = (
	<Route path="/" handler={App} name="app">
		<Route path="/home" handler={Home} name="home"></Route>
		<DefaultRoute handler={Home} />
	</Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});