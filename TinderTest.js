var request = require('request');
var tinder = require('tinderjs');
var client = new tinder.TinderClient();

var FB_USER_TOKEN = 'CAAGm0PX4ZCpsBAH6QQN4J2IQMLL8jeXsCRx2dMwMZCEZBMjT6Utl80TNixqqqiMQKLvhDnZCZBaY1VQmOMQdZBJW0vVTez41pHx8NoyzzsTSTyYj0dB3vIMl4JKJSfF6I87vhG07KZBOLZAptYyBa5ESPemIYZAJfL4xUcULvaGoINd4KzK8w1oMrLuWbn0v9zkLSZC8rO3cF98yQKehrWnRda';
var FB_USER_ID = '2539134351764';


//var URL = "http://i.imgur.com/REdTb8a.jpg";
var URL;
var pictureCount = 0;
var pictureObj = {};

var runFacialRecognition = function(URL, cb){
  var options = {
    url: 'https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?url='+URL,
    headers: {
      'X-Mashape-Key': 'H7SUTDerX7mshZfgezL0oKl0E8hYp1WKpHhjsn42V6rHAGX5ms',
      Accept: 'application/json'
    }
  }
  
  request(options, function(error, response, body){

	  if(!error && response.statusCode == 200){

	    var parsed = JSON.parse(body)

	    if (parsed.face[0] !== undefined){
	    	var attributes = parsed.face[0].attribute;
	    	cb(attributes);
	    }

	  } 
	});
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
        	console.log(val);
        });

      });
    });
  });
