var request = require('request');
var tinder = require('tinderjs');
var client = new tinder.TinderClient();

var FB_USER_TOKEN = 'CAAGm0PX4ZCpsBAOxiBCJ2wWPwoJAIHe8IZBXWrwqmciKqHZCFXGZBbufPHDirLKgWhKjfsw1VlS2P40mKyU6mYpjDHmk1uwMTiWcOVLp7otbZAKy6dYg31LbUUv4SR4uW9Cggkua4ZCD8rDEIHZAWRoMVxTAJ0MZCNWG6sGhc5ZBIEI8uBlxJpO28PooAbEKZBj0g2tJwcUkbB9JP2YvZCZC22A2'
var FB_USER_ID = '2539134351764'


var URL = 'http://i.imgur.com/REdTb8a.jpg'

var options = {
    url: 'https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?url='+URL,
    headers: {
      'X-Mashape-Key': 'IJ3moiqJsymshUNl41Sq09a38nMjp1OIrd9jsnJw6JjvebyGo5',
      Accept: 'application/json'
    }
}

var requestCallback = function(error, response, body){
  console.log("Request Callback Invoked")
  if(!error && response.statusCode == 200){
    var parsed = JSON.parse(body)
    console.log(parsed.face[0].attribute)
  }
}

var runFacialRecognition = function(params){
  request(params, requestCallback)
}

runFacialRecognition(options);

// client.authorize(
//   FB_USER_TOKEN,
//   FB_USER_ID,
//   function() {
//     client.getRecommendations(1, function(error, data){
//       /* add a keyword functionality here
//       */ 

//       /* filter out trans*/ 

//       // var parsed = JSON.parse(data); ?? 
      
//       data.results[0].photos.forEach(function(photo){
//         console.log(photo.url) // Print out all initial photos to compare and test
//         //runFacialRecognition(options, id)





//       });
//     });
//   });


