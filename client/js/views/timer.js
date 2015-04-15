import React from 'react';
import { Well, Button } from 'react-bootstrap';
import { playerStore } from '../stores/playerStore';
import Time from '../components/Time';
import { timerActions } from '../actions/ActionCreator';

export class Timer extends React.Component {
  constructor () {
    this.state = playerStore.getPlayer();
    if (this.state.active) {
      this.startTimer();
    }

    this.onChange = function () {
      const player = playerStore.getPlayer();
      this.setState(player);
      if (player.active) {
        this.startTimer();
      }
    }.bind(this);
  }

  componentWillMount () {
    playerStore.addChangeListener(this.onChange);
  }

  tick () {
    this.setState({
      time: this.state.time - 1
    });
  }

  startTimer () {
    if (!this.interval) {
      this.interval = setInterval(this.tick.bind(this), 1000);
    }
  }

  stopTimer () {
    clearInterval(this.interval);
    delete this.interval;
    timerActions.stop({ time: this.state.time });
  }

	render () {
    const component = this;
		return (
			<div className="timer-container">
        <Time time={this.state.time} />
        <Well>
          <Button block bsStyle="primary" onClick={this.stopTimer.bind(component)}>Stop Timer</Button>
        </Well>
			</div>
		);
	}
}
