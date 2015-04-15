import { AppDispatcher } from '../dispatcher/appDispatcher';
import { AppConstants } from '../constants';

export const playerActions = {
  create (attrs) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.create,
      attrs
    });
  },

  update (attrs) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.update,
      attrs
    });
  }
}

export const timerActions = {
  start () {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.start
    });
  },

  stop (opts) {
    AppDispatcher.handleViewAction({
      opts,
      actionType: AppConstants.stop
    });
  }
}
