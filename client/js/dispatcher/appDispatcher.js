import { Dispatcher } from 'flux';
import { assign } from 'lodash';

export default AppDisptacher = new Dispatcher();

assign(AppDisptacher, {
  handleViewAction (payload) {
    this.dispatch({
      payload,
      source: 'view'
    });
  },

  handleServerAction (payload) {
    this.dispatch({
      payload,
      source: 'server'
    })
  }
});
