"use strict";

searchButton.addEventListener("click", searchWeather);

function searchWeather() {
    
    loadingText.style.display = 'block';
    weather.style.display = "none";
    
    var cityName = searchCity.value;
    
    // trim() function removes any whitespaces entered.
    if(cityName.trim().length === 0) {
        alert("Please type in a city name");
    }
    
    // setting up an http request
    var http = new XMLHttpRequest();
    var apiKey = "8afd931381e00062465cd0cc299c2270";
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&units=metric&appid=" + apiKey;
    var method = "GET";
    http.open(method, url);
    
    http.onreadystatechange = function(){
        if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            
            updateWeather(weatherData);
        } 
        else if(http.readyState === XMLHttpRequest.DONE ){
            alert("Something went wrong!");
        }
    };
  
    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName; 
    weatherDescription.textContent = weatherData.description;
    weatherTemp.textContent = weatherData.temperature;
    
    loadingText.style.display = 'none';
    weather.style.display = "block";
}
    
 