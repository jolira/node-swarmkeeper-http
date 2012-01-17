var keeper = require('../lib/swarmkeeper-http');

describe('swarmkeeper', function () {
  describe('#start()', function () {
    it('should launch without error', function (done) {
      var swarm = keeper("1", ["1", "2", "3"], {});
      done();
    });
  });
});
