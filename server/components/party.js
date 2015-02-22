var _ = require('lodash')
  , EventEmitter = require('events').EventEmitter
  , debug = require('debug')('Party');
;


/**
 * Party Class
 * Contains players and controls actions performed on them
 *
 * @param players {Object} - Array or Object of player(s)
 * @class Party 
 */
function Party (players) {
  if (typeof players !== 'object' && players) {
    var message = 'players must be either an array or an object';
    debug(message);
    throw new Error(message);
  }

  if (_.isPlainObject(players)) {
    players = [players];
  }

  this.players = players || [];

  this.id = _.uniqueId('Party_');
  debug('Party created');
}

Party.prototype = _.extend(Party.prototype, EventEmitter.prototype, {
  /**
   * Determines if the player is able to join the party
   * Checks name and color attributes
   *
   * @param newPlayer (Object) - The new player to add
   * @class Party
   */
  _canJoin: function (newPlayer) {
    return this.players.filter(function (player) {
      return (
        (newPlayer.name.toLowerCase() === player.name.toLowerCase()) ||
        (newPlayer.color.toLowerCase() === player.color.toLowerCase())
      );
    }).length === 0;
  },

  /**
   * Adds a player to the party if they dont already match another player
   *
   * @param player {Object} - the new player to add
   * @class Party
   * @chainable
   */
  add: function (player) {
    if (this._canJoin(player)) {      
      this.players.push(player);
      this.emit('player:added');
      debug('Adding player: ' + player.name + ' to the party');
    }

    return this;
  },

  /**
   * Removes a player from the party if a matching index is found
   *
   * @param name {String} - The name of the player. Can also be the player object
   * @class Party
   * @chainable
   */
  remove: function (name) {
    if (typeof name === 'object') {
      name = name.name;
    }

    var index = -1
      , i
      , length = this.players.length
    ;

    for (i = 0; i < length; i++) {
      var player = this.players[i];
      if (player.name === name) {
        index = i;
        break;
      }
    }

    if (index > -1) {
      debug('Removing ' + name + ' from the party');
      this.players.splice(index, 1);
      this.emit('player:removed');
    } else {
      debug('No player named: ' + name + ' found');
    }

    return this;
  }
});

exports = module.exports = Party;