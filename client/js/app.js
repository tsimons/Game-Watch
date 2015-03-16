/** @jsx React.DOM */

var React = require('react')
  , Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Link = Router.Link

  , Navbar = require('react-bootstrap').Navbar
  , Nav = require('react-bootstrap').Nav
  , NavItem = require('react-bootstrap').NavItem
;

var App = React.createClass({
  mixins: [Router.State],

  render: function() {
    return (
      <div className="app">
        <Navbar brand="Game Watch" toggleNavKey={0}>
          <Nav eventKey={0}>
            <NavItem href="/#/about">About</NavItem>
          </Nav>
        </Navbar>

        <RouteHandler />
      </div>
    );
  }

});

module.exports = App;