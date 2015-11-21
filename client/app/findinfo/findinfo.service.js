'use strict';

angular.module('timelineApp')
  .factory('findinfo', function () {
    var data = {};
    data.mainLine = [];
    data.generateMainLine = function(size){
      var yearBase;
      data.mainLine.length = 0;
      if(size > 100){yearBase = 10;}else{yearBase = 100;}
      for(var i = 0;i<size;i++){
        data.mainLine.push({year: i*yearBase});
      }
    }
 
    data.findInfo = function(infoData){

      console.log(infoData);
    }
    return data;
  });
