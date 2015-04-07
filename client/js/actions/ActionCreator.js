import { AppDispatcher } from '../dispatcher/appDispatcher';
import AppConstants from '../constants';

export const userActions = {
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
