"use strict";

searchButton.addEventListener("click", searchWeather);

function searchWeather() {
    var cityName = searchCity.value;
    
    // trim() function removes any whitespaces entered.
    if(cityName.trim().length === 0) {
        alert("Please type in a city name");
    }
    
    // setting up an http request
    var http = new XMLHttpRequest();
    var apiKey = "8afd931381e00062465cd0cc299c2270";
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;
    var method = "GET";
    http.open(method, url);
    
    http.onreadystatechange = function(){
        if(http.readyState === http.XMLHttpRequest.DONE && http.status === 200){
            var data = JSON.parse(http.responseText);
        } 
        else if(http.readyState === XMLHttpRequest.DONE ){
            alert("Something went wrong!");
        }
    };
  
    http.send();
}
    
 