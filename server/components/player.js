var _ = require('lodash')
  , EventEmitter = require('events').EventEmitter
  , Timer = require('./timer')
;

function Person (attrs, opts) {
  var _defaults = {
    name: 'I\'m an idiot',
    color: '#999',
    id: _.uniqueId('Person_')
  };

  _.extend(this, _defaults, attrs);

  opts = opts || {};

  this.timer = new Timer(opts.limit);
}

Person.prototype = _.extend(Person.prototype, EventEmitter.prototype, {

});

exports = module.exports = Person;