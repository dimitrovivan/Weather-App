import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';
import { backOnPush } from '../scripts/util.js';

export default ({
    isLogged,

}) => html`${headerTemplate(isLogged)}
<div class="page-404">
    <button class="btn btn--primary btn--back" @click=${backOnPush}>Back</button>
    <h1 class="page-404__heading text-centered">Invalid city or country name</h1>
    <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
</div>
`