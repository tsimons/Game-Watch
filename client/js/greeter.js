/** @jsx React.DOM */

var React = require('react')
  , Router = require('react-router')
  , RouteHandler = Router.RouteHandler
;

var App = React.createClass({
  mixins: [Router.State],
  render: function() {
    console.log('Params: %O', this.getParams());
    return (
      <span>
        {this.getParams().person}

        <RouteHandler />
      </span>
    );
  }

});

module.exports = App;