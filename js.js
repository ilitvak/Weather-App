"use strict";

/* ---------------------- */
/* Buzz.js | Sounds off when cold */
/* ---------------------- */

var sound = new buzz.sound("brr", {
    formats: [ "mp3" ],
    preload: true,
    autoplay: false,
    loop: false
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
    
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&units=imperial&appid=" + apiKey;
    
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
    
    // Reset ClassName for next iteration of thermometers
    
    indicatorColdIcon.classList.remove("empty");
    indicatorColdIcon.classList.remove("half");
    indicatorColdIcon.classList.remove("quarter");
}

function updateWeather(weatherData) {    
    
    // resets thermometers classes on button click
    indicatorColdIcon.className = "fa fa-thermometer-";
    indicatorHotIcon.className = "fa fa-thermometer-";
    
    weatherCity.textContent = weatherData.cityName; 
    weatherDescription.textContent = weatherData.description;
    weatherTemp.textContent = weatherData.temperature + " Deg F.";
    
    loadingText.style.display = 'none';
    weather.style.display = "block";

    if(weatherData.temperature <= 59 && weatherData.temperature >= 31) {
        sound.play();
        indicatorCold.style.display = "block";
        indicatorColdIcon.className += 'half';
        indicatorCold.firstElementChild.textContent = 'It\'s kinda chilly. Wear a lighter Jacket.';

        indicatorHot.style.display = 'none';
    }
    
    else if(weatherData.temperature <= 30 && weatherData.temperature >= 11) {
        sound.play();
        indicatorCold.style.display = 'block';
        indicatorColdIcon.className += 'quarter';
        indicatorCold.firstElementChild.textContent = 'It\'s cold out. Wear a jacket.';
        
        indicatorHot.style.display = 'none';
    }
    
    else if(weatherData.temperature <= 10) {
        sound.play();
        indicatorCold.style.display = 'block';
        indicatorColdIcon.className += 'empty';
        indicatorCold.firstElementChild.textContent = "Do not. I repeat. Do Not Go Outside!";
        
        indicatorHot.style.display = 'none';
    }
    
    else if(weatherData.temperature >= 60 && weatherData.temperature <= 79) {
        sound.stop();
        indicatorCold.style.display = 'none';
        
        indicatorHot.style.display = 'block';
        indicatorHotIcon.className += 'three-quarters';
        indicatorHot.firstElementChild.textContent = "Weather is getting warm. Go Play.";
        
    }
    
    else if(weatherData.temperature >= 80) {
        sound.stop();
        indicatorCold.style.display = 'none';
        
        indicatorHot.style.display = 'block';
        indicatorHotIcon.className += 'full';
        indicatorHot.firstElementChild.textContent = "Go Outside! Its hot af! Get a Tan.";
    }
}
    
 