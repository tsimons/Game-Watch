import { Store } from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';

var _player = {};

export default playerStore = new Store({
  getPlayer: function () {
    return _player;
  }
});

function updateUser (player = {}) {
  _player = assign(_player, player);
  UserStore.emitChange();
}

AppDispatcher.register(function (payload) {
  switch (payload.action.actionType) {
    case 'create':
    case 'update':
      updateUser(payload.attrs);
    break;
  }
});
