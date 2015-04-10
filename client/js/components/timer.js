import React from 'react';
import { TimerStore } from '../stores/timerStore';

export class Timer extends React.Component {
  constructor () {
    this.state = timerStore.getTime(this.props.player);
  }

  componentDidMount () {
    timerStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    timerStore.removeChangeListener(this._onChange);
  }

  render () {
    return (
      <h1 className="time">
        this.state.time
      </h1>
    );
  }

  _onChange () {
    this.setState(timerStore.getTime(this.props.player));
  }
};
