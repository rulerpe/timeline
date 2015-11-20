'use strict';

angular.module('timelineApp')
  .factory('findinfo', function () {
    var data = {};
    data.mainLine = [];
    data.makeMainLine = function(){
      
    }
    data.findInfo = function(infoData){

      console.log(infoData);
    }
    return data;
  });
