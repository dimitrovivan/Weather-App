import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from '../templates/partials/header.js';

export default ({
    isLogged,

    //TODO ::get all data
}) => html`${headerTemplate(isLogged)}
<div class="forecast-page">
   
    <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
</div>
`