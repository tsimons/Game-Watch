import { _ } from 'lodash';
import { events } from 'events'
import { AppDispatcher } from '../dispatcher/appDispatcher'

var timers = {}
  , _activePlayer = ''
  , _activeInterval
;

var timerStore;

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

const CHANGE_EVENT = 'change';

export var TimerStore = _.assign(events.EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  getTime: function (player) {
    return timers[player]
  },

  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
};

AppDispather.register(function (action) {
  
});