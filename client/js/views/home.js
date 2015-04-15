import React from 'react';
import { RouteHandler } from 'react-router';
import { Button, Input, Glyphicon, Well } from 'react-bootstrap';
import { playerStore } from '../stores/playerStore';
import { playerActions } from '../actions/ActionCreator';

export class Home extends React.Component {
	constructor () {
    this.state = {};
    this.state.player = playerStore.getPlayer();
  }

  componentWillMount () {
    playerStore.addChangeListener(this._onChange.bind(this));
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
          <h3>Join or Create a Party</h3>

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

					<Input
						type="text"
						defaultValue={this.state.player.party}
						label="Party Name"
            onChange={this.handleFormChange.bind(component)}
            ref="party" />

					<Well>
						<Button bsSize="large" block bsStyle="primary"><i className="fa fa-users"></i> Join Party</Button>
						<Button bsSize="large" block bsStyle="success"><i className="fa fa-plus"></i> Create Party</Button>
					</Well>
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
