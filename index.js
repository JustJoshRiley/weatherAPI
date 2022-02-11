export class WeatherLib {
    constructor(apiKey) {
        this._apiKey = apiKey
    }

    async getWeatherByZip(zip, unit, callback) {
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${this._apiKey}&units=${unit}`
        const res = await  fetch(path)
        const json = await res.json()
        console.log(json)
        const object = {
            weather : json.weather[0].description,
            mainTemp : json.main.temp,
            cityName : json.name
        }
        callback(object)
    }

    async getWeatherByCity(city, unit, callback) {
        const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._apiKey}&units=${unit}`
        const res = await  fetch(path)
        const json = await res.json()
        const object = {
            weather : json.weather[0].description,
            mainTemp : json.main.temp,
            cityName : json.name
    }
    callback(object)
    }

    async getWeatherbyGeo(lat, lon, unit, callback) {
        const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this._apiKey}&units=${unit}`
        const res = await  fetch(path)
        const json = await res.json()
        console.log(json)
        const object = {
            weather : json.weather[0].description,
            mainTemp : json.main.temp,
            cityName : json.name
        }
        callback(object)
    }
}