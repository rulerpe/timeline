'use strict';

angular.module('timelineApp')
  .factory('wikisearch', function ($http) {
    var result = {};
    result.currentName = {};

    result.findName = function(input){
      var results = [];
      var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=92&gsrlimit=5&prop=pageimages|extracts&pilimit=max&exsentences=5&exintro&explaintext&exlimit=max&gsrsearch="
      var apiEnd = "&callback=JSON_CALLBACK"
      var searchTitle = input.replace(/\s/, "_");
      return $http.jsonp(api + searchTitle + apiEnd).then(function(data) {
         //console.log(data);
        var wikiList = data.data.query.pages;
        angular.forEach(wikiList, function(value) {
          if ( value.extract.match(/(born)\s\w+\s\d+\,\s\d+/g) || value.extract.match(/\d+\s\w+\s\d+/g) || value.extract.match(/\w+\s\d+\,\s\d+/g) ) {
            results.push(value.title);

            result.currentName = value;

          }
        })
        return results
      });
    };
    return result;
  });
