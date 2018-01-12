"use strict";

function Weather(cityName, description){
    this.cityName = cityName;
    this.description = description;
    this._temperature = "";
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function(){
        return this._temperature;
    },
    set: function(value) {
        this._temperature = ((1.8 * (value - 273)) + 32).toFixed(2);
    }
});