var React = require('react')
  Timer = require('../components/timer')
  timerStore = require('../stores/timerStore')
;

exports = module.exports = React.createClass({
  getInitialState: function () {
    return {
      timers: timerStore.getTimers()
    };
  },

  componentDidMount: function() {
    timerStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    timerStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div className="timer-container">
        <section className="main-timer">
          <h3 className="timer-heading">Your Turn</h3>
          <Timer player={} size="large" />
          <p className="timer-instructions">Click screen to finish turn</p>
        </section>
        <section className="timers">
          {Object.keys(this.state.timers).map(function (player) {
            return <Timer player={player} key={player} size="small" />;
          })}
        </section>
      </div>
    );
  },

  _onChange: function () {
    this.setState({
      timers: timerStore.getTimers()
    });
  }
});