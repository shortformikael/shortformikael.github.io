var xhr = new XMLHttpRequest();
// Define the URL of the JSON file
var url = 'dataStructures.json';
// Open a new connection, using the GET request on the URL endpoint
xhr.open('GET', url, true);

var surveyData; // Data structure data

xhr.onload = function() {
  if (xhr.status == 200) {
    // Parse the response text as a JSON object
    var data = JSON.parse(xhr.responseText);
    surveyData = data;
    // Log the data to the console
    //console.log(data);
  }
};
// Send the request
xhr.send();