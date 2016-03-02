var request = require('request');
var tinder = require('tinderjs');
var client = new tinder.TinderClient();

var FB_USER_TOKEN = 'CAAGm0PX4ZCpsBAEHm0PkDfM45VbOktP6PioSCaajuQzGoSC9JRUs28tiFT4xTqIfFezZCdiM3B6ZAfA1rWsSzwRxIZASIOahhwJyHgZA6s8LsJrBQHfiEfA9N4ZCrx4RKOu2xGZCkdI8XZBkbNPcO2jCdZCrkQW1cZAnk0kZBu1Omet06qveyrjZChzPFzLr0lnz6cpbOAqqip0nZBoRuypOFWhFk';
var FB_USER_ID = '2539134351764';


//var URL = "http://i.imgur.com/REdTb8a.jpg";
var URL;
var pictureCount = 0;
var pictureObj = {};

var requestCallback = function(error, response, body, cb){
  console.log("Request Callback Invoked")
  if(!error && response.statusCode == 200){

    var parsed = JSON.parse(body)
    var attributes = parsed.face[0].attribute;
    cb(attributes);
  } 
}

var runFacialRecognition = function(URL, cb){
  var options = {
    url: 'https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?url='+URL,
    headers: {
      'X-Mashape-Key': 'H7SUTDerX7mshZfgezL0oKl0E8hYp1WKpHhjsn42V6rHAGX5ms',
      Accept: 'application/json'
    }
  }
  request(options, requestCallback);
}

//runFacialRecognition(options) 
client.authorize(
  FB_USER_TOKEN,
  FB_USER_ID,
  function() {
    client.getRecommendations(1, function(error, data){

      data.results[0].photos.forEach(function(photo){
        URL = photo.url;
        console.log(URL)
        runFacialRecognition(URL, function(val){
          client.like(data._userID, function(val){
            console.log("Liked!")
          })
        });

      });
    });
  });
