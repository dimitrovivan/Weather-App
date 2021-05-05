import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from '../templates/partials/header.js';
import { passLocation } from '../scripts/util.js';

export default ({
    isLogged,
}) => html`${headerTemplate(isLogged)}
<div class="weather-page">
    <div class="weather-page__body flex">
        <div class="weather-page__description">
            <h2>Different kind of weather</h2>
            <h2 class="report-heading"> reports 24/7.</h2>
            <div class="search-container flex">
                <input type="text" class="search-input" placeholder="Search city or country" required/>
                <a href="" class="btn btn--primary get-weather-button navLink" @click=${passLocation}>Check</a>
            </div>
            <p>Best way to know your City or Country weather.</p>
        </div>
        <div class="weather-page__image">
           <img src="../images/weatherLaptop.jpg"></img>
        </div>
    </div>
    <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
</div>
`