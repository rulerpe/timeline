'use strict';

angular.module('timelineApp')
  .factory('wikisearch', function ($http) {
    var result = {};
    result.currentName = [];
    function isPerson(inputStr){
      if(inputStr.match(/birth_date/g)){
        return true;
      }else{
        return false;
      }
    };
    function formatName(nameStr){
      return nameStr.split(" ").map(function(v){
        return v.charAt(0).toUpperCase() + v.slice(1);
      }).join("_");
    };

    result.findName = function(input){
      var results = [];
      result.currentName = [];
      var api = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions|pageimages&imlimit=1&rvprop=content&rvsection=0&format=json&callback=JSON_CALLBACK&titles="
      var searchTitle = formatName(input);
      return $http.jsonp(api + searchTitle).then(function(data) {
        var searchResult = data.data.query.pages;
        //console.log(searchResult)
        if(searchResult["-1"]){
          return [];
        }
        if(searchResult[Object.keys(searchResult)[0]].revisions[0]["*"].match(/(#REDIRECT|#redirect)/g)){
          var redirectValue = searchResult[Object.keys(searchResult)[0]].revisions[0]["*"].match(/\[\[.+\]\]/g)[0].slice(2,-2)
          //console.log(redirectValue)
          return $http.jsonp(api+redirectValue).then(function(dataR){
            if(isPerson(dataR.data.query.pages[Object.keys(dataR.data.query.pages)[0]].revisions[0]["*"])){
             // console.log("true",dataR);
              result.currentName = {"content": dataR.data.query.pages[Object.keys(dataR.data.query.pages)[0]].revisions[0]["*"],
                                    "title": dataR.data.query.pages[Object.keys(dataR.data.query.pages)[0]].title,
                                    "img": dataR.data.query.pages[Object.keys(dataR.data.query.pages)[0]].thumbnail.source
                                  }
              return [redirectValue];
            }else{
              //console.log("false", dataR);
              return [];
            }
          })
        }

        if(isPerson(searchResult[Object.keys(searchResult)[0]].revisions[0]["*"])){
         // console.log("right name", searchResult[Object.keys(searchResult)[0]].revisions[0]["*"].match(/birth_date.*?\n/g))
          result.currentName = {"content": searchResult[Object.keys(searchResult)[0]].revisions[0]["*"], 
                                "title": searchResult[Object.keys(searchResult)[0]].title,
                                "img": searchResult[Object.keys(searchResult)[0]].thumbnail.source
                              }
          return [searchResult[Object.keys(searchResult)[0]].title]
        }

        return [];
        
      });
    };
    return result;
  });
