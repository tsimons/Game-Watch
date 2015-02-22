var EventEmitter = require('events').EventEmitter
  , _ = require('lodash')
  , debug = require('debug')('Timer');
;

/**
 * Timer Class
 *
 * Sets the remaining attribute automatically
 *
 * @param opts {Object} - attributes to initialize with
 */
function Timer (limit) {
  this.limit = limit || 30;
  this._remaining = this.limit * 60 * 1000;
  debug('Initializing new Timer with ' + this.limit + ' limit');
}


Timer.prototype = _.extend(Timer.prototype, EventEmitter.prototype, {
  /**
   * Starts the timer by setting a timestamp 
   *
   * @class Timer
   * @chainable
   */
  start: function () {
    if (this._remaining > 0) {
      this._startTime = new Date();
      this.emit('start');
      debug('starting timer');
    } else {
      debug('attempting to start when no time left');
    }
    return this;
  },

  /**
   * Pauses the timer.
   * Checks if time is up. If so, emits a timesup event.
   *
   * @class Timer
   * @chainable
   */
  pause: function () {
    if (!this._startTime) {
      debug('pause called before start');
      return;
    }

    this._endTime = new Date();
    this._remaining = this._remaining - (this._endTime - this._startTime);
    debug('setting remaining to: ' + this._remaining);

    this.emit('pause');
    debug('pausing timer');

    if (this._remaining <= 0) {
      this.emit('timesup');
      debug('Time ended');
    }

    return this;
  }
});

exports = module.exports = Timer;