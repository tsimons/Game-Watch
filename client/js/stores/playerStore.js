import { Store } from './Store';
import { AppDispatcher } from '../dispatcher/AppDispatcher';

const _defaults = {
  name: '',
  party: '',
  color: ''
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
        updateUser(payload.attrs);
      break;
    }
  })
});

function updateUser (player = {}) {
  _player = assign(_player, player);
  UserStore.emitChange();
}
