'use strict';

angular.module('timelineApp')
  .controller('MainCtrl', function ($scope, $http,wikisearch,findinfo) {
  	$scope.title = undefined;
    $scope.wikiSearch = wikisearch.findName;
    $scope.findInfo =  findinfo;
    $scope.getInfo = function(){
    	$scope.findInfo.findInfo(wikisearch.currentName);
    };
    $scope.findInfo.generateMainLine(20);
  });
