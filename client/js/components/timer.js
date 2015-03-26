var React = require('react')
  , timerStore = require('../stores/timerStore')
;

exports = module.exports = React.createClass({
  getInitialState: function () {
    return timerStore.getTime(this.props.player);
  },
  componentDidMount: function () {
    timerStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    timerStore.removeChangeListener(this._onChange);
  },
  render: function () {
    return (
      <h1 className="time">
        this.state.time
      </h1>
    );
  },

  _onChange: function () {
    this.setState(timerStore.getTime(this.props.player));
  }
});