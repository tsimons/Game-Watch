var React = require('react')
  , App = require('./app')

  // Router
  , Router = require('react-router')
  , Route = Router.Route
  , Link = Router.Link
  , RouterHandler = Router.RouteHandler
;

var routes = (
	<Route path=":person" handler={App} />
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});