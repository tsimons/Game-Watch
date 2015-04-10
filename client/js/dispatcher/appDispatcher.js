import { Dispatcher } from 'flux';
import { assign } from 'lodash';

export let AppDispatcher = new Dispatcher();

assign(AppDispatcher, {
  handleViewAction (action) {
    this.dispatch({
      action,
      source: 'view'
    });
  },

  handleServerAction (action) {
    this.dispatch({
      action,
      source: 'server'
    })
  }
});
