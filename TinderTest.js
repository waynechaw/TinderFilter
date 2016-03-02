var request = require('request');
var tinder = require('tinderjs');
var client = new tinder.TinderClient();

var FB_USER_TOKEN = 'CAAGm0PX4ZCpsBAO8njUhAKIKuq30ZANBqTa3VEjdrgojm9C8c4VcPzkPktMoMvLqcD6y7KcubnNVnkuDsoiAPDwjYsvZBwgrV33SLRthfVzDZCPhsWaP5ChICRm9gsrcoJQhZBYNNmerLD4g0BmOSCIODCibruUrykaZBcT7SYM1m1KPBQaOtnDbXokcAdGcPzsM28hj32wWZClBqL5ZCM4z';
var FB_USER_ID = '2539134351764';


var URL = "http://i.imgur.com/REdTb8a.jpg";
//var URL;

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
    var attributes = parsed.face[0].attribute;
    console.log(attributes);
  }
}

var runFacialRecognition = function(params){
  request(params, requestCallback);

}

//runFacialRecognition(options) 
client.authorize(
  FB_USER_TOKEN,
  FB_USER_ID,
  function() {
    client.getRecommendations(1, function(error, data){
      var pictureCount = 0;
      var pictureObj = {};
      data.results[0].photos.forEach(function(photo){
        console.log(photo.url) // Print out all initial photos to compare and test

      });
    });
  });

// var faceAnalysis = {
//       gender: null,
//       race: null,
//     }
//     faceAnalysis = {
//       race: attributes.gender;
//       gender: attributes.gender;
//     };
//     if(faceAnalysis.gender.value === 'Female' && faceAnalysis.gender.confidence > 50){

//     }