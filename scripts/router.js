import { getTemplate, rootRender } from './templateServices.js';
import { getDataFromStorage } from './authServices.js';

const routeOnPopstate = () => router(location.pathname);

window.addEventListener('popstate', routeOnPopstate);

const forbiddenForGuestPath = ['/weather'];

const route = [
    {
        regexPath: /^\/$/,
        execute: () => {
            
            let userData = getDataFromStorage('userData');

            return getTemplate('home', userData);
        }
    },


    {
        regexPath: /^\/weather$/,
        execute: () => {

            let userData = getDataFromStorage('userData');

            return getTemplate('home', userData);
        }
    },

    {
        regexPath: /^\/about$/,
        execute: () => {

            let userData = getDataFromStorage('userData');

            return getTemplate('about', userData);
        }
    },

    {
        regexPath: /^\/login$/,
        execute: () => {

            let userData = getDataFromStorage('userData');

            return getTemplate('login', userData);
        }
    },

    {
        regexPath: /^\/register$/,
        execute: () => {

            let userData = getDataFromStorage('userData');
            
            return getTemplate('register', userData);
        }
    }
]

function router(path) {

    let currentRoute  = checkForPath(path);

    let template = currentRoute.execute();

    return rootRender(template);
}


export function navigate(path) {

    if(!checkForUnAuthorizedAccess(path)) path = '/login';

    history.pushState({}, '', path);

    let customEvent = new CustomEvent('popstate');

    window.dispatchEvent(customEvent);
}

export const redirect = (path) => navigate(path);

export function checkForPath(path)  {

    let currentRoute = route.find( ({ regexPath }) => path.match(regexPath));

    return currentRoute ? currentRoute : false;
}

function checkForUnAuthorizedAccess(path) {

    let userData = getDataFromStorage('userData');

    if(userData && userData.isLogged) return true;

    return forbiddenForGuestPath.find( x => x == path) ? false : true;
    
}
