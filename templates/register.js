import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../scripts/userServices.js';
import  headerTemplate from '../templates/partials/header.js';

export default ( {
    isLogged,
}) => html`${headerTemplate(isLogged)}
<div class="register-page flex flex--column">
          <div class="register-page__header">
            <h1>Register</h1>
          </div>
          <div class="register-page__main">
            <form action="#" method="" class="submit-form">
              <label for="registerEmail"><h5>Email:</h5></label>
              <input type="email" id="registerEmail" class="registerEmail" name="email">
              <label for="registerPassword"><h5>Password:</h5></label>
              <input type="password" id="registerPassword" class="registerPassword" name="password">
              <label for="repeatPassword"><h5>Repeat Password:</h5></label>
              <input type="password" id="repeatPassword" class="repeatPassword" name="repeatPassword">
              <button class="btn btn--primary" type="submit"  @click=${register}>Register</button>
          </form>
          </div>
          <div class="footer">Copyright@ 2021 Designed by Ivan Dimitrov</div>
        </div>
`