import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../../scripts/userServices.js';
import { animateBurger } from '../../scripts/util.js';


export default (isLogged) => html`
<header>
        <nav class="top-navigation flex">
          <div class="top-navigation__logo-wrapper flex">
            <span class="weather-span">Weather.</span>
            <span class="spa-span">ID</span>
          </div>

          <div class="top-navigation__show-list" @click=${animateBurger}><span class="burger-menu"></span></div>
          <ul class="top-navigation__list flex flex--centered">
            <li class="top-navigation__list-item"><a href="/" class="top-navigation__link flex flex--centered navLink">Home</a>
            </li>
            <li class="top-navigation__list-item"><a href="/about"
                class="top-navigation__link flex flex--centered navLink">About</a></li>

            ${isLogged
            ? html`
            <li class="top-navigation__list-item"><a href="/weather"
                class="top-navigation__link flex flex--centered navLink">Weather</a></li>
                <li class="top-navigation__list-item"><a class="top-navigation__btn btn btn--primary" @click=${logout}>Logout</a>
            </li>
            `
            : html`
            <li class="top-navigation__list-item"><a href="/login"
                class="top-navigation__btn btn btn--primary navLink">Log In</a></li>
            <li class="top-navigation__list-item"><a href="/register"
                class="top-navigation__btn btn btn--secondary navLink">Register</a></li>
            `
            }
          </ul>
        </nav>
      </header>
`