var Party = require('../../../server/components/party')
  , sinon = require('sinon')
;

describe('Party Class', function () {
  describe('initialization', function () {
    it('defaults players to an empty array', function () {
      var party = new Party();

      party.players.should.be.instanceof(Array);
    });

    it('adds the players', function () {
      var players = [{ name: 'John' }];
      var party = new Party(players);

      party.players.should.be.exactly(players);
    });

    it('adds player as an array if passed as object', function () {
      var player = { name: 'John' };
      var party = new Party(player);

      party.players[0].should.be.exactly(player);
    });

    it('adds an id', function () {
      var party = new Party();
      party.id.should.be.ok;
    });

    describe('throws error', function () {
      var message = 'players must be either an array or an object';
      var test = function (param, done) {
        try {
          var party = new Party(param);
          done('If we make it beyond, we fail');
        } catch (e) {
          e.message.should.be.exactly(message);
          done();
        }
      };

      it('when passed a String', function (done) {
        test('This will fail', done);
      });

      it('when passed a Number', function (done) {
        test(8008, done);
      });

      it('when passed a Boolean', function (done) {
        test(true, done);
      });
    });
  });

  describe('_canJoin method', function () {
    var john, party
    beforeEach(function () {
      john = { name: 'john', color: '#0ff' };
      party = new Party(john);
    });

    it('returns false if same name', function () {
      party._canJoin({ name: 'john', color: '#ff0' }).should.be.false;
    });

    it('returns false is same color', function () {
      party._canJoin({ name: 'tj', color: '#0ff' }).should.be.false;
    });

    it('returns true for different players', function () {
      party._canJoin({ name: 'tj', color: '#ff0' }).should.be.true;
    });
  });

  describe('_assignOrder method', function () {
    it('acknowledges pre assigned order', function () {
      var party = new Party();      
    });
  });

  describe('add method', function () {
    var john, party
    beforeEach(function () {
      john = { name: 'john', color: '#0ff' };
      party = new Party();

      sinon.stub(party, 'emit');

      party.add(john);
    });

    afterEach(function () {
      party.emit.restore();
    });

    it('adds players to a party', function () {
      party.players[0].should.be.exactly(john);
    });

    it('emits a player:added event', function () {
      party.emit.firstCall.args[0].should.be.exactly('player:added');
    });

    it('doesn\'t add the player if _canJoin fails', function () {
      sinon.stub(party, '_canJoin', function () {
        return false;
      });

      party.add({ name: 'john' });

      party.players.length.should.be.exactly(1);
    });
  });
  
  describe('remove method', function () {
    var party, player;

    beforeEach(function () {
      player = {
        name: 'John',
        color: '#0ff'
      };
      party = new Party(player);
    });

    it('removes a player from the party by name', function () {
      party.remove(player.name);

      party.players.length.should.be.exactly(0);
    });

    it('removes a player by passing the entire player object', function () {
      party.remove(player);

      party.players.length.should.be.exactly(0);
    });

    it('triggers a player:removed event', function () {
      sinon.stub(party, 'emit');

      party.remove(player.name);

      party.emit.firstCall.args[0].should.be.exactly('player:removed');
      party.emit.restore();
    });
  });
});