import { getTemplate, rootRender } from './templateServices.js';

const routeOnPopstate = () => router(location.pathname);

window.addEventListener('popstate', routeOnPopstate);

const route = [
    {
        regexPath: /^\/$/,
        execute: () => getTemplate('home', {isLogged: true})
    },


    {
        regexPath: /^\/weather$/,
        execute: () => getTemplate('home', {isLogged: true})
    },

    {
        regexPath: /^\/about$/,
        execute: () => getTemplate('about', {isLogged: true})
    },

    {
        regexPath: /^\/login$/,
        execute: () => getTemplate('login', {isLogged: true})
    },

    {
        regexPath: /^\/register$/,
        execute: () => getTemplate('register', {isLogged: true})
    },
]

function router(path) {

    let currentRoute  = checkForPath(path);

    let template = currentRoute.execute();

    return rootRender(template);
}


export function navigate(path) {

    history.pushState({}, '', path);

    let customEvent = new CustomEvent('popstate');

    window.dispatchEvent(customEvent);
}

export const redirect = (path) => navigate(path);

export function checkForPath(path)  {

    let currentRoute = route.find( ({ regexPath }) => path.match(regexPath));

    return currentRoute ? currentRoute : false;
}
