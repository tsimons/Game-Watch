import React from 'react';
import { RouteHandler } from 'react-router';
import { ButtonGroup, Button, Input, Glyphicon } from 'react-bootstrap';
import { playerStore } from '../stores/playerStore';
import { playerActions } from '../actions/ActionCreator';

export class HomeView extends React.Component {
	constructor () {
    this.state.player = playerStore.getPlayer();
  }

  componentWillMount () {
    playerStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    playerStore.removeChangeListener(this._onChange);
  }

  handleFormChange () {
    playerActions.update({
      name: this.refs.playerName.getValue(),
      color: this.refs.playerColor.getValue(),
      party: this.refs.party.getValue()
    });
  }

	render () {
    let component = this;
		return (
			<div className="home">
        <section className="blade clearfix">
          <h3>Who Are you?</h3>
          <h5>I really wanna know!</h5>

          <Input
            type="text"
            defaultValue={this.state.player.name}
            label="Name"
            onChange={this.handleFormChange.bind(component)}
            ref="playerName" />

          <Input
            type="color"
            defaultValue={this.state.player.color}
            label="Color"
            onChange={this.handleFormChange.bind(component)}
            ref="playerColor" />

					<h3>Join or Create a Party</h3>

					<Input
						type="text"
						defaultValue={this.state.player.party}
						label="Party Name"
            onChange={this.handleFormChange.bind(component)}
            ref="party" />

					<ButtonGroup className="pull-right">
						<Button bsStyle="primary"><i className="fa fa-users"></i> Join Party</Button>
						<Button bsStyle="success"><i className="fa fa-plus"></i> Create Party</Button>
					</ButtonGroup>
				</section>
			</div>
		);
	}

  _onChange () {
    this.setState({
      player: playerStore.getPlayer()
    });
  }
}
