import { html } from 'https://unpkg.com/lit-html?module';
import  headerTemplate from '../templates/partials/header.js';

export default ( {
    isLogged,
    date,
    year,
    month,
    hours,
    minutes,
    city,
    country,
    weatherIconCode,
    mainWeather,
    weatherDescription,
    feelsLike,
    currTemp,
    cloudPercentage,
    humidity,
    windSpeed,
}) => html`${headerTemplate(isLogged)}
   <div class="home-page flex flex--column">
            <div class="home-page__header">
              <h1 class="home-page__heading">Weather Web App</h1>
              <div class="home-page__description">
              <p>Check out the weather in the location you want, anywhere , at anytime!</p>
              <p></p> All you need is simple <a href="/register" class="navLink">Register</a> or go directly to check <a href="/weather" class="navLink">Weather</a> if you are already registered!</p>
            </div>
          </div>

          <div class="home-page__main">
              
            <div class="curr-weather">
              <div class="curr-weather__header">
                <h4 class="curr-weather__heading">Current Weather Report</h4>
                <div class="curr-weather__time-description">
                   <div class="curr-weather__location-description">${country}, ${city}</div>
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
                       <div>Wind: ${windSpeed}m/s</div>
                     </div>
            
                     <div class="curr-weather__humudity">
                     <img src="../images/humidity.png" alt="Wind picture" class="weather-details-picture">
                       <div>Humudity: ${humidity}%</div>
                     </div>
                </div>
              </div>
            
            </div>
            </div>
           <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
         </div>
`