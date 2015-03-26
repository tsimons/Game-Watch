var _ = require('lodash')
  , EventEmitter = require('events').EventEmitter
  , AppDispather = require('../dispatcher/appDispatcher')
;

var timers = {}
  , _activePlayer = ''
  , _activeInterval
;

function startTimer () {
  if (_activeInterval) { clearInterval(_activeInterval) };
  _activeInterval = setInterval(tick, 1000);
}

function tick () {
  var timer = timers[_activePlayer];

  timer.time -= 1;
  if (timer.time < 0) {
    clearInterval(_activeInterval)
  }

  TimerStore.emitChange();
}

var CHANGE_EVENT = 'change';

var TimerStore = _.extend({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  getTime: function (player) {
    return timers[player];
  },
  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});

AppDispather.register(function (action) {
  switch(action.actionType) {

  }
});

exports = module.exports = TimerStore;