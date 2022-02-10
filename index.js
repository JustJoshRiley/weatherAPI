// function getWeather() {
//     // Replace this with your own API key!
    
//     fetch(path)
//         .then(res => res.json())
//         .then(json => {
//             callback(json)
//         })
//         .catch(err => console.log(err.message))
// }

export async function getWeatherbyZip(apiKey, zip, unit, callback) {
    // const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${unit}`
    const res = await  fetch(path) // waits here until the promise resolves
    const json = await res.json() // waits here until the promise resolves
    console.log(json)
    const object = {
        weather : json.weather[0].description,
        mainTemp : json.main.temp,
        cityName : json.name
    }
    callback(object) // returns json wrapped in a Promise
}

export async function getWeatherbyCity(apiKey, city, unit, callback) {
    // const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
    const res = await  fetch(path) // waits here until the promise resolves
    const json = await res.json() // waits here until the promise resolves
    console.log(json)
    const object = {
        weather : json.weather[0].description,
        mainTemp : json.main.temp,
        cityName : json.name
    }
    callback(object) // returns json wrapped in a Promise
}

export async function getWeatherbyGeo(apiKey, lat, lon, unit, callback) {
    // const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
    const res = await  fetch(path) // waits here until the promise resolves
    const json = await res.json() // waits here until the promise resolves
    console.log(json)
    const object = {
        weather : json.weather[0].description,
        mainTemp : json.main.temp,
        cityName : json.name
    }
    callback(object) // returns json wrapped in a Promise
}