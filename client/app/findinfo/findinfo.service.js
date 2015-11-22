'use strict';

angular.module('timelineApp')
  .factory('findinfo', function () {
    var data = {};
    data.mainLine = [];
    data.zoomedOutLine = [];
    data.zoomedInLine = [];
    data.events = [
      {
        name: "Colosseum built in Rome",
        year: "80",
        pic: "http://www.emoticonswallpapers.com/avatar/various/Colosseum-in-Rome.jpg",
      },{
        name: "Huns (Mongols) invade Europe",
        year: "360",
        pic: "http://pds.exblog.jp/pds/1/201410/15/79/e0040579_21371287.jpg",
      },{
        name: "Tang  dynasty in China founded by Emperor Gaozu of Tang",
        year: "618",
        pic: "http://www.koreanwikiproject.com/wiki/images/d/d4/%E5%94%90.png",
      },{
        name: "Vikings begin attacks on Britain",
        year: "790",
        pic: "http://ecx.images-amazon.com/images/I/41QJNw%2BwZgL._AC_UL200_SR160,200_.jpg",
      },{
        name: "Otto I crowned Holy Roman Emperor by Pope John XII",
        year: "962",
        pic: "http://i123.photobucket.com/albums/o306/WmHohenzollern/myth2-13-9.jpg",
      }
    ];
    for(var i = 0;i<21;i++){
        data.zoomedOutLine.push({year: i*100,event:{},born: [], die: []});
        data.events.forEach(function(v){
          if(Math.floor(v.year/100) == i){
            data.zoomedOutLine[i].event = v;
          }
        })
    }
    for(var i = 0;i<210;i++){
      data.zoomedInLine.push({year: i*10,event:{},born: [], die: []});
      data.events.forEach(function(v){
          if(Math.floor(v.year/10) == i){
            data.zoomedInLine[i].event = v;
          }
        })
    }
    data.generateMainLine = function(size){
      var arr;
      data.mainLine.length = 0;
      if(size > 100){arr = data.zoomedInLine;}else{arr = data.zoomedOutLine;}
      for(var i = 0;i<size;i++){
        data.mainLine.push(arr[i]);
      }
      console.log(data.mainLine)
    }
 
    data.addPerson = function(personObj){
      console.log(personObj);
      var personInfo = {};
      
    }


    return data;
  });
