'use strict';

angular.module('timelineApp')
  .directive('timeline', function () {
    return {
      templateUrl: 'app/timeline/timeline.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });