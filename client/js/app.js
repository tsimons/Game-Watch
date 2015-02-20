/** @jsx React.DOM */

var React = require('react')
  , Router = require('react-router')
  , RouteHandler = Router.RouteHandler
;

var App = React.createClass({
  mixins: [Router.State],
  getDefaultProps: function () {
    return {
      greeting: "Hello"
    } 
  },
  render: function() {
    console.log('Params: %O', this.getParams());
    
    return (
      <div>
        <h1>{this.props.greeting} {this.getParams().person}!</h1>

        <RouteHandler />
      </div>
    );
  }

});

module.exports = App;