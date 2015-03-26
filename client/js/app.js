import { React } from 'react';
import { Router } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

var RouteHandler = Router.RouteHandler
  , Link = Router.Link
;

export class App extends React.Component {
  render () {
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

};
