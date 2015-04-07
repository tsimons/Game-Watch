import { EventEmitter } from 'events';
import { assign } from 'lodash';

const CHANGE_EVENT = 'change';

export class Store extends EventEmitter {
  constructor (...args) {
    assign(this, ...args);
  }

  emitChange () {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener (cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener (cb) {
    this.removeListener(cb);
  }
}
