//$.getJSON("dataStructures.json", function(json) {
//    console.log(json)
//})

//var json = require('./dataStructures.json');

//var data = JSON.parse(document.getElementById('data').textContent);

//import Data from "./dataStructures.json"

/*
fetch("./dataStructures.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
*/

var xhr = new XMLHttpRequest();

// Define the URL of the JSON file
var url = 'dataStructures.json';

// Open a new connection, using the GET request on the URL endpoint
xhr.open('GET', url, true);

xhr.onload = function() {
  if (xhr.status == 200) {
    // Parse the response text as a JSON object
    var data = JSON.parse(xhr.responseText);

    // Log the data to the console
    console.log(data);
  }
};

// Send the request
xhr.send();