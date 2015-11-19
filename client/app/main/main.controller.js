'use strict';

angular.module('timelineApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.title = undefined;
    $scope.wikiSearch = function(input){
    	var results = [];
	    var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=92&gsrlimit=5&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
	      // var searchTitle = input.replace(/\s/,"_")
	    var apiEnd = "&callback=JSON_CALLBACK"
	    
		var searchTitle = input.replace(/\s/, "_");
		return $http.jsonp(api + searchTitle + apiEnd).then(function(data) {
			 console.log(data);
			var wikiList = data.data.query.pages;
			angular.forEach(wikiList, function(value) {
			  if (value.thumbnail && value.extract.match(/\d{4}.{4,}\d{4}/g) || value.extract.match(/(born)/i)) {
			    results.push(value.title);
			  }
			})
			return results
		});
    };

    console.log($scope.wikiSearch("obama"));


  });
