'use strict';

angular.module('timelineApp')
  .controller('MainCtrl', function ($scope, $http,wikisearch,findinfo) {
  	$scope.title = undefined;
    $scope.wikiSearch = wikisearch.findName;
    $scope.findInfo =  findinfo;
    $scope.addPerson = function(tile){
    	$scope.findInfo.addPerson(wikisearch.currentName[tile]);
    };
    $scope.zoom = function(size){
    	findinfo.generateMainLine(size);
    	document.getElementById('timeLineContainer').style.width = size<100 ? "100%":"1000%";
    
    }
    $scope.zoom(11);
  });
