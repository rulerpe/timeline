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
        name: "Vandals destroy Rome",
        year: "455",
        pic: "http://orig05.deviantart.net/4130/f/2014/334/4/d/genseric_of_the_vandals_by_akreon-d888e1c.jpg",
      },{
        name: "Vikings begin attacks on Britain",
        year: "790",
        pic: "http://ecx.images-amazon.com/images/I/41QJNw%2BwZgL._AC_UL200_SR160,200_.jpg",
      },{
        name: "Beginning of Mayan Post-Classical period ",
        year: "900",
        pic: "http://www.infoplease.com/images/pyramid3.gif",
      },{
        name: "William of Normandy invades England, crowned William I of England (“the Conqueror”).",
        year: "1066",
        pic: "http://ichef.bbci.co.uk/arts/yourpaintings/images/paintings/bab/large/es_bab_88055642_large.jpg",
      },{
        name: "The Hongwu Emperor, the founder of the Ming dynasty",
        year: "1368",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/%E6%98%8E%E5%A4%AA%E7%A5%96.jpg/170px-%E6%98%8E%E5%A4%AA%E7%A5%96.jpg",
      },{
        name: "Columbus becomes first European to encounter Caribbean islands",
        year: "1492",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/220px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg",
      },{
        name: "The American Revolution begins with battle of Lexington and Concord",
        year: "1775",
        pic: "http://donnawissinger.com/wp-content/uploads/2009/11/WashingtonCrossingDelaware.JPG",
      },{
        name: "World War I begins",
        year: "1914",
        pic: "http://pdxretro.com/wp-content/uploads/2011/09/War-begins-world-war-one_thumb.jpg",
      },{
        name: "Terrorists Hijackers ram jetliners into twin towers of New York City's World Trade Center and the Pentagon",
        year: "2001",
        pic: "http://www.infoplease.com/images/wtcprior.jpg",
      }
    ];
    for(var i = 0;i<11;i++){
        data.zoomedOutLine.push({year: i*200,event:{},born: [], die: []});
        data.events.forEach(function(v){
          if(Math.floor(v.year/200) == i){
            data.zoomedOutLine[i].event = v;
          }
        })
    }
    for(var i = 0;i<110;i++){
      data.zoomedInLine.push({year: i*20,event:{},born: [], die: []});
      data.events.forEach(function(v){
          if(Math.floor(v.year/20) == i){
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
    //  console.log(data.mainLine)
    }
 
    data.addPerson = function(personObj){
      console.log(personObj);
      var year = getYear(personObj.extract);
      data.zoomedOutLine[Math.floor(year.born/200)].born.push({name:personObj.title , born: year.born, die: year.die, img: personObj.thumbnail.source});
      data.zoomedInLine[Math.floor(year.born/20)].born.push({name:personObj.title , born: year.born, die: year.die, img: personObj.thumbnail.source});
      if(year.die){
        data.zoomedOutLine[Math.floor(year.die/200)].die.push({name:personObj.title , born: year.die, die: year.die, img: personObj.thumbnail.source});
        data.zoomedInLine[Math.floor(year.die/20)].die.push({name:personObj.title , born: year.die, die: year.die, img: personObj.thumbnail.source});
      }
     // console.log(data.zoomedOutLine)
    }

    function getYear(extractStr){
      var result = {};
      if(extractStr.match(/(born)\s\w+\s\d+\,\s\d+/g)){
        result.born = extractStr.match(/(born)\s\w+\s\d+\,\s\d+/g)[0].split(" ")[3]
      }else if(extractStr.match(/\d+\s\w+\s\d+/g)){
        result.born = extractStr.match(/\d+\s\w+\s\d+/g)[0].split(" ")[2];
        result.die = extractStr.match(/\d+\s\w+\s\d+/g)[1].split(" ")[2];
      }else if(extractStr.match(/\w+\s\d+\,\s\d+.+\d+\)/g)){
        result.born = extractStr.match(/\w+\s\d+\,\s\d+.+\d+\)/g)[0].split(" ")[2];
        result.die = extractStr.match(/\w+\s\d+\,\s\d+.+\d+\)/g)[0].split(" ")[5].slice(0,4);
      }else if(extractStr.match(/\w+\s\d+\,\s\d+/g)){
        result.born = extractStr.match(/\w+\s\d+\,\s\d+/g)[0].split(" ")[2];
        result.die = extractStr.match(/\w+\s\d+\,\s\d+/g)[1].split(" ")[2];
      }
      //console.log(extractStr.match(/\w+\s\d+\,\s\d+.+\d+\)/g)[0].split(" "))
      return result;
    }


    return data;
  });
