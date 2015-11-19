'use strict';

angular.module('timelineApp')
  .controller('MainCtrl', function ($scope, $http,wikisearch) {
  	$scope.title = undefined;
    $scope.wikiSearch = wikisearch.findName;

  });
