import { Store } from './Store';
import { AppDispatcher } from '../dispatcher/AppDispatcher';
import { assign } from 'lodash';

const _defaults = {
  name: '',
  party: '',
  color: '',
  time: 10000,
  active: true
};

let _player = _defaults;

export const playerStore = new Store({
  getPlayer: function () {
    return _player;
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    switch (payload.action.actionType) {
      case 'create':
      case 'update':
        updatePlayer(payload.action.attrs);
        break;

      case 'start':
        updatePlayer({ active: true });
        break;
      case 'stop':
        updatePlayer({
          time: payload.action.opts.time,
          active: false
        });
        break;
    }
  })
});

function updatePlayer (player = {}) {
  _player = assign(_player, player);
  playerStore.emitChange();
}
