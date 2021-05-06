import { html } from 'https://unpkg.com/lit-html?module';
import { backOnPush } from '../scripts/util.js';
import headerTemplate from '../templates/partials/header.js';

export default ({
    isLogged,
    date,
    year,
    month,
    hours,
    minutes,
    city,
    weatherIconCode,
    mainWeather,
    weatherDescription,
    feelsLike,
    currTemp,
    cloudPercentage,
    humidity,
    windSpeed,
    country
}) => html`${headerTemplate(isLogged)}
<div class="forecast-page">
   <div class="forecast-page__header flex">
   <button class="btn btn--primary btn--back" @click=${backOnPush}>Back</button>
   <h1>Weather Forecast of ${city}</h1>
   </div>
   <div class="forecast-page__body">
    <div class="curr-weather">
              <div class="curr-weather__header">
                <h4 class="curr-weather__heading">Current Weather Report</h4>
                <div class="curr-weather__time-description">
                   <div class="curr-weather__location-description">${city}</div>
                  <time>${date} ${month} ${year}, ${hours}:${minutes}</time>
                </div>
              </div>
                
              <div class="curr-weather__body">
                <div class="curr-weather__main-temp-description flex flex--column">
                  <div class="temp-image-wrapper">
                  <img src="http://openweathermap.org/img/wn/${weatherIconCode}@2x.png" alt="Weather Image">
                  </div>
                  <div class="weather-description"> ${mainWeather}, ${weatherDescription}</div>
                  <div class="temp-description-wrapper">
                    <div>Temp: ${currTemp} °</div>
                    <div>Feels like: ${feelsLike} °</div>
                  </div>
                </div>
                <div class="curr-weather__extra-description">
                     <div class="curr-weather__cloudness">
                     <img src="../images/cloudness.jpg" alt="Wind picture" class="weather-details-picture">
                       <div>Cloudness: ${cloudPercentage}%</div>
                     </div>
            
                     <div class="curr-weather__wind">
                     <img src="../images/wind.png" alt="Wind picture" class="weather-details-picture">
                       <div>Wind: ${windSpeed} m/s</div>
                     </div>
            
                     <div class="curr-weather__humudity">
                     <img src="../images/humidity.png" alt="Wind picture" class="weather-details-picture">
                       <div>Humudity: ${humidity}%</div>
                     </div>
                </div>
              </div>
   </div>
    <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
</div>
`