'use strict';

describe('Service: wikisearch', function () {

  // load the service's module
  beforeEach(module('timelineApp'));

  // instantiate service
  var wikisearch;
  beforeEach(inject(function (_wikisearch_) {
    wikisearch = _wikisearch_;
  }));

  it('should do something', function () {
    expect(!!wikisearch).toBe(true);
  });

});
