import { EventEmitter } from 'events'
import { AppDispatcher } from '../dispatcher/appDispatcher'
import { Store } from './Store';

var timers = {}
  , _activePlayer = ''
;

const CHANGE_EVENT = 'change';

export const TimerStore = new Store({
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
  },

  dispatcherIndex: AppDispather.register(function (payload) {
    switch (payload.action.actionType) {
      case 'endTimer':
      break;
    }
  })

});
