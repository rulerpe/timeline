'use strict';

angular.module('timelineApp')
  .factory('findinfo', function () {
    var data = {};
    data.mainLine = [];
    data.getMainLine = function(){
      return data.mainLine;
    }
    data.generateMainLine = function(size){
      data.mainLine.length = 0;
      for(var i = 0;i<size;i++){
        data.mainLine.push({});
      }
    }
 
    data.findInfo = function(infoData){

      console.log(infoData);
    }
    return data;
  });
