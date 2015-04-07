jest.dontMock('../playerStore');

var playerStore = require('../playerStore');

describe('User Store', function () {
  describe('emitChange method', function () {
    beforeEach(function () {
      
    });

    it('emits a change event', function () {
      playerStore.emitChange();
    });
  });
});
