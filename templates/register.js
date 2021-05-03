import { html } from 'https://unpkg.com/lit-html?module';
import  headerTemplate from '../templates/partials/header.js';

export default ( {
    isLogged
}) => html`${headerTemplate()}
<div class="register-page flex flex--column">
          <div class="register-page__header">
            <h1>Register</h1>
          </div>
          <div class="register-page__main">
            <form class="submit-form">
              <label for="registerEmail"><h5>Email:</h5></label>
              <input type="email" id="registerEmail" class="registerEmail" name="email">
              <label for="registerPassword"><h5>Password:</h5></label>
              <input type="password" id="registerPassword" class="registerPassword" name="password">
              <label for="repeatPassword"><h5>Repeat Password:</h5></label>
              <input type="password" id="repeatPassword" class="repeatPassword" name="repeatPassword">
              <a href="/" class="btn btn--primary navLink">Register</a>
          </form>
          </div>
          <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
        </div>
`