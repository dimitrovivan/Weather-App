const getEndpoint = {

    current: (latitude, longitude) => `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=246cebefc6972a472b2621e015a5d2a7&units=metric`,
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

// I have written only BG because there is no sense to fill it with all countries. Its for educ purposes.
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

    return getRegularWeatherData(data);

}

export async function getFullWeatherData(location) {

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=246cebefc6972a472b2621e015a5d2a7&units=metric`;

    try {

    let response = await fetch(url);

    if(response.status == 404) throw new Error("Wrong city or country");

    let data = await response.json();

    return getRegularWeatherData(data);

    } catch(err) {

        return null;
    } 

}


function getRegularWeatherData(dataObj) {

    return {
       cloudPercentage: dataObj.clouds.all,
       humidity: dataObj.main.humidity,
       windSpeed: parseFloat(dataObj.wind.speed).toFixed(1),
       currTemp: Math.round(dataObj.main.temp),
       feelsLike: Math.round(dataObj.main.feels_like),
       mainWeather: dataObj.weather[0].main,
       weatherDescription: dataObj.weather[0].description,
       weatherIconCode: dataObj.weather[0].icon,
       city: dataObj.name,
       country: countryObj[dataObj.sys.country]
    }
}