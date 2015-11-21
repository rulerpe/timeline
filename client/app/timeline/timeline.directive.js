'use strict';

angular.module('timelineApp')
  .directive('timeline', function (findinfo) {
    return {
      templateUrl: 'app/timeline/timeline.html',
      restrict: 'EA',
      controller: function ($scope, $attrs, findinfo) {
      	$scope.mainLine = findinfo.mainLine;
      }
    };
  });