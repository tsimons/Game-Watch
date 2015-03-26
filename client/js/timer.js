import { React } from 'react';
import { Timer } from '../components/timer';
import { TimerStore } from '../stores/timerStore';

export class TimerView extends React.Component {
  getInitialState () {
    return {
      timers: timerStore.getTimers()
    };
  }

  componentDidMount () {
    timerStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    timerStore.removeChangeListener(this._onChange);
  }

  render () {
    return (
      <div className="timer-container">
        <section className="main-timer">
          <h3 className="timer-heading">Your Turn</h3>
          <Timer size="large" />
          <p className="timer-instructions">Click screen to finish turn</p>
        </section>
        <section className="timers">
          {Object.keys(this.state.timers).map(function (player) {
            return <Timer player={player} key={player} size="small" />;
          })}
        </section>
      </div>
    );
  }

  _onChange () {
    this.setState({
      timers: timerStore.getTimers()
    });
  }
};