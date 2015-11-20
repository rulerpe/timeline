'use strict';

angular.module('timelineApp')
  .controller('MainCtrl', function ($scope, $http,wikisearch,findinfo) {
  	$scope.title = undefined;
    $scope.wikiSearch = wikisearch.findName;
    $scope.findInfo = function(){
    	findinfo.findInfo(wikisearch.currentName);
    }
  });
