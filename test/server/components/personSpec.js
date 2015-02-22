var Person = require('../../../server/components/player')
  , Timer = require('../../../server/components/timer')
  , sinon = require('sinon')
;


describe('Person Class', function () {
  describe('initialization', function () {
    it('sets default paramaters', function () {
      var person = new Person();
      person.should.have.property('name');
      person.should.have.property('color');
      person.should.have.property('id');
    });

    it('sets the passed on values', function () {
      var person = new Person({
        foo: 'bar'
      });

      person.should.have.property('foo');
    });

    it('overrides defaults', function () {
      var person = new Person({
        name: 'John'
      });

      person.should.have.property('name', 'John');
    });

    it('adds a timer', function () {
      var person = new Person();
      person.timer.should.be.instanceof(Timer);
    });
  });
});