import React from 'react';
import { Router } from 'react-router';
import { ButtonGroup, Button, Input, Glyphicon } from 'react-bootstrap';

var RouteHandler = Router.RouteHandler;


export class Home extends React.Component {
  getInitialState () {
    return {
      value: ''
    }
  }

  render () {
    return (
      <div className="home">
        <section className="blade clearfix">
          <h3>Join or Create a Party</h3>
          <Input
            type="text"
            value={this.state.value}
            label="Party Name" />
          <ButtonGroup className="pull-right">
            <Button bsStyle="primary"><i className="fa fa-users"></i> Join Party</Button>
            <Button bsStyle="success"><i className="fa fa-plus"></i> Create Party</Button>
          </ButtonGroup>
        </section>

        <RouteHandler />
      </div>
    );
  }
}