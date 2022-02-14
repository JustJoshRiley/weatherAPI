# Weather API Library

### Installation:
Clone the starter code

Run - git clone https://github.com/JustJoshRiley/weatherAPI.git

### How it works:
1. Open index.html

2. Grab your API_KEY from [Open Weather Map](https://openweathermap.org)
  * Create an account to gain access to your own API_KEY

3. EX). Lines 93 - 94:
  * Saves an API_KEY to a variable (apiKey).
  * Creates a new weather class
  * Passes the apiKey to the class (this can be done directly)
  ```js
  const apiKey = '1a226c5722a5a37173253cabe929e4d3'
  const weather = new WeatherLib(apiKey)
  ```

4. In the event listener we access methods of the weather class:
  * EX) Line 116 gets the weather by zip from the user
  
  ```js
  weather.getWeatherByZip(zip, unit, (data) => {
    tempEl.innerHTML = data.mainTemp
    descEl.innerHTML = data.weather
    cityEl.innerHTML = data.cityName
  })
  ```



  * Line 122 gets the weather by city from the user
  ```js
  weather.getWeatherByCity(city, unit, (data) => {
    tempEl.innerHTML = data.mainTemp
    descEl.innerHTML = data.weather
    cityEl.innerHTML = data.cityName
  })
  ```

  * Line 128 gets the weather by geolocation from the user
  ```js
  weather.getWeatherByCity(lat, lon, unit, (data) => {
    tempEl.innerHTML = data.mainTemp
    descEl.innerHTML = data.weather
    cityEl.innerHTML = data.cityName
  })
  ```

### How to use methods
