!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).weatherlib=t()}(this,(function(){"use strict";return class{constructor(e){this._apiKey=e}async getWeatherByZip(e,t,a){const i=`https://api.openweathermap.org/data/2.5/weather?zip=${e}&appid=${this._apiKey}&units=${t}`,n=await fetch(i),o=await n.json();console.log(o);a({weather:o.weather[0].description,mainTemp:o.main.temp,cityName:o.name})}async getWeatherByCity(e,t,a){const i=`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${this._apiKey}&units=${t}`,n=await fetch(i),o=await n.json();a({weather:o.weather[0].description,mainTemp:o.main.temp,cityName:o.name})}async getWeatherbyGeo(e,t,a,i){const n=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=${this._apiKey}&units=${a}`,o=await fetch(n),p=await o.json();console.log(p);i({weather:p.weather[0].description,mainTemp:p.main.temp,cityName:p.name})}}}));