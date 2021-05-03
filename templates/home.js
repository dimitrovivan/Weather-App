import { html } from 'https://unpkg.com/lit-html?module';
import  headerTemplate from '../templates/partials/header.js';

export default ( {
    isLogged
}) => html`${headerTemplate(isLogged)}
   <div class="home-page flex flex--column">
            <div class="home-page__header">
              <h1 class="home-page__heading">Weather Web App</h1>
              <div class="home-page__description">
              <p>Check out the weather in the location you want, anywhere , at anytime!</p>
              <p></p> All you need is simple <a href="/register" class="navLink">Register</a> or go directly to <a href="/login" class="navLink">Log in</a> if you are already registered!</p>
            </div>
          </div>

          <div class="home-page__main">
              
            <div class="curr-weather">
              <div class="curr-weather__header">
                <h4 class="curr-weather__heading">Current Weather Report</h4>
                <p class="curr-weather__time-description">2 May 2021, 18:17, Bulgaria, Burgas</p>
              </div>
                
              <div class="curr-weather__body">
                <div class="curr-weather__main-temp-description flex flex--centered flex--column">
                  <div class="temp-image-wrapper"><h4>Img...</h4></div>
                  <div class="temp-description-wrapper">
                    <div>Temp C</div>
                    <div>Feels like: Temp C</div>
                  </div>
                </div>
                <div class="curr-weather__extra-description">
                     <div class="curr-weather__cloudness">
                       <h4>Img..</h1>
                       <div>%Cloudness</div>
                     </div>
            
                     <div class="curr-weather__wind">
                       <h4>Img</h1>
                       <div>%m/s</div>
                     </div>
            
                     <div class="curr-weather__humudity">
                       <h4>Img</h4>
                       <div>%humudity</div>
                     </div>
                </div>
              </div>
            
            </div>
            </div>
           <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
         </div>
`