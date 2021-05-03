import { html } from 'https://unpkg.com/lit-html?module';
import  headerTemplate from '../templates/partials/header.js';

export default ( {
    isLogged
}) => html`${headerTemplate()}
<div class="login-page flex flex--column">
          <div class="login-page__header">
            <h1>Login</h1>
          </div>
          <div class="login-page__main">
            <form class="submit-form">
              <label for="loginEmail"><h5>Email:</h5></label>
              <input type="email" id="loginEmail" class="loginEmail" name="email">
              <label for="loginPassword"><h5>Password:</h5></label>
              <input type="password" id="loginPassword" class="loginPassword" name="password">
              <a href="/" class="btn btn--primary navLink">Log in</a>
          </form>
          </div>
          <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
        </div>
`