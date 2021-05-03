import { html } from 'https://unpkg.com/lit-html?module';
import  headerTemplate from '../templates/partials/header.js';

export default ( {
    isLogged
}) => html`${headerTemplate(isLogged)}
<div class="about-page flex flex--column">
          <div class="about-page__header">
            <h1>About page</h1>
          </div>

          <div class="about-page__main flex">
            <div class="about-page__description">
              <p>Single page application build for weather check.</p>
              <p>It's made for fun and educational purposes, where i practiced the knowledge i gained from online course.</p>
              <p>Thanks to OpenWeatherMap api for the free plan!</p>
            </div>
            <div class="about-page__image-wrapper">
              <img src="images/weatherLaptop.jpg" alt="Laptop">
            </div>
          </div>
           <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
        </div>
        
`