import { saveDataInStorage, getDataFromStorage } from './authServices.js';

const apiKey = '246cebefc6972a472b2621e015a5d2a7';

const getEndpoint = {

    current: (latitude, longitude) => `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
}

const monthObj = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

const countryObj = {
    BG: "Bulgaria"
}
export function getTimeData() {
    const dateTime = new Date();
    const date = dateTime.getDate();
    const year = dateTime.getFullYear();
    const month = monthObj[dateTime.getMonth()];
    const day = dateTime.getDay();
    const hours = Number(dateTime.getHours()) < 10 ? `0${dateTime.getHours()}` : dateTime.getHours();
    const minutes = Number(dateTime.getMinutes()) < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

    return {
        date,
        year,
        month,
        day,
        hours,
        minutes
    }
}

export function getCurrentLocation() {

        return new Promise((resolve, reject) => 
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );

}

export async function getCurrentWeatherData(latitude, longitude) {

    let response = await fetch(getEndpoint.current(latitude,longitude));

    let data = await response.json();

    let cloudPercentage = data.clouds.all;
    let humidity = data.main.humidity;
    let windSpeed = parseFloat(data.wind.speed).toFixed(1);
    let currTemp = Math.round(data.main.temp);
    let feelsLike = Math.round(data.main.feels_like);
    let mainWeather = data.weather[0].main;
    let weatherDescription = data.weather[0].description;
    let weatherIconCode = data.weather[0].icon;
    let city = data.name;
    let countryCode = data.sys.country;

    return {
        cloudPercentage,
        humidity,
        windSpeed,
        currTemp,
        feelsLike,
        mainWeather,
        weatherDescription,
        weatherIconCode,
        city,
        country: countryObj[countryCode]
    }

}

