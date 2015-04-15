import React from 'react';

export default class Time extends React.Component {
  formatTime (totalSeconds) {
    totalSeconds = parseInt(totalSeconds, 10);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (minutes * 60) - (hours * 3600);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    return `${hours}:${minutes}:${seconds}`;
  }

  render () {
    return (
      <div className="time">{ this.formatTime(this.props.time) }</div>
    );
  }
}
