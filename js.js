"use strict";

/* ---------------------- */
/* Buzz.js | Sounds off when cold */
/* ---------------------- */

var sound = new buzz.sound("brr", {
    formats: [ "mp3" ],
    preload: true,
    autoplay: false,
    loop: true
});

buzz.defaults.autoplay = true;

if ( !buzz.isMP3Supported() ) {
    alert("Your browser doesn't support MP3 Format.");
}

/* ---------------------- */
/* Button Click Functionality */
/* ---------------------- */

searchButton.addEventListener("click", searchWeather);

function searchWeather() {
    
    loadingText.style.display = 'block';
    weather.style.display = "none";
    indicatorCold.style.display = "none";
    indicatorHot.style.display = "none";
    
    var cityName = searchCity.value.toUpperCase();
    
    // trim() function removes any whitespaces entered.
    if(cityName.trim().length === 0) {
        alert("Please type in a city name");
    }
    
    // setting up a new http request / new instance of object 
    var http = new XMLHttpRequest();
    
    // API key from website
    var apiKey = "8afd931381e00062465cd0cc299c2270";
    
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&units=metric&appid=" + apiKey;
    
    var method = "GET";
    http.open(method, url);
    
    http.onreadystatechange = function(){
        if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description);
            
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
    weatherTemp.textContent = weatherData.temperature + " Deg F.";
    
    loadingText.style.display = 'none';
    weather.style.display = "block";

    if(weatherData.temperature < 20) {
        sound.play();
        indicatorCold.style.display = 'block';
        indicatorHot.style.display = 'none';
    }
    
    if(weatherData.temperature > 30) {
        sound.stop();
        indicatorCold.style.display = 'none';
        indicatorHot.style.display = 'block';
    }
}
    
 