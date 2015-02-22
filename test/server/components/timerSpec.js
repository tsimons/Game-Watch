var Timer = require('../../../server/components/timer')
  , sinon = require('sinon')
;

describe('Timer Class', function () {
  var timer;

  describe('construction', function () {
    it('adds the default limit', function () {
      timer = new Timer();

      timer.should.have.property('limit', 30);
      timer.should.have.property('_remaining', 30 * 60 * 1000);
    });

    it('Sets the time limit to the passed value', function () {
      var limit = 50;
      timer = new Timer(limit);

      timer.should.have.property('limit', limit);
    });
  });

  describe('start method', function () {
    it('adds the startTime property', function () {
      timer = new Timer();
      timer.should.not.have.property('_startTime');

      timer.start();

      timer._startTime.should.be.instanceof(Date);
    });

    it('emits a start event', function () {
      timer = new Timer();
      sinon.stub(timer, 'emit');

      timer.start();
      timer.emit.firstCall.args[0].should.be.exactly('start');

      timer.emit.restore();
    });
  });

  describe('pause method', function () {
    it('diffs the start time and pause time with the remaining time', function () {
      var clock = sinon.useFakeTimers();
      timer = new Timer();

      timer.start();
      var remaining = timer._remaining;
      clock.tick(20);
      timer.pause();

      (timer._remaining < remaining).should.be.true;

    });

    it('emits a pause event', function () {
      timer = new Timer();
      sinon.stub(timer, 'emit');
      timer._startTime = new Date();

      timer.pause();
      timer.emit.firstCall.args[0].should.be.exactly('pause');

      timer.emit.restore();
    });

    it('emits a timesup event when there\'s no time left', function () {
      timer = new Timer(-1);
      sinon.stub(timer, 'emit');
      timer._startTime = new Date();

      timer.pause();
      timer.emit.secondCall.args[0].should.be.exactly('timesup');

      timer.emit.restore();
    });
  });
});