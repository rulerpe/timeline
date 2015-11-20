'use strict';

describe('Service: findinfo', function () {

  // load the service's module
  beforeEach(module('timelineApp'));

  // instantiate service
  var findinfo;
  beforeEach(inject(function (_findinfo_) {
    findinfo = _findinfo_;
  }));

  it('should do something', function () {
    expect(!!findinfo).toBe(true);
  });

});
