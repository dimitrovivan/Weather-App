import { getTemplate, rootRender } from './templateServices.js';
import { getDataFromStorage } from './authServices.js';
import { getTimeData, getCurrentLocation, getCurrentWeatherData } from './weatherServices.js';

const routeOnPopstate = () => router(location.pathname);

window.addEventListener('popstate', routeOnPopstate);

const forbiddenForGuestPath = ['/weather'];

const route = [
    {
        regexPath: /^\/$/,
        execute: async () => {

            let timeData = getTimeData();

            let userData = getDataFromStorage('userData');

            let weatherData;

            weatherData = await getCurrentWeatherData(42.698334, 23.319941);

            let context = { ...timeData, ...userData, ...weatherData };

            rootRender(getTemplate('home', context));

            try {

            let position = await getCurrentLocation();

            let longitude = position.coords.longitude;
            let latitude = position.coords.latitude;

            weatherData = await getCurrentWeatherData(latitude, longitude);

            context = { ...timeData, ...userData, ...weatherData };

            } finally {

                return getTemplate('home', context);
            }
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

async function router(path) {

    let currentRoute = checkForPath(path);

    let template = await currentRoute.execute();

    return rootRender(template);
}


export function navigate(path) {

    if (!checkForUnAuthorizedAccess(path)) path = '/login';

    history.pushState({}, '', path);

    let customEvent = new CustomEvent('popstate');

    window.dispatchEvent(customEvent);
}

export const redirect = (path) => navigate(path);

export function checkForPath(path) {

    let currentRoute = route.find(({ regexPath }) => path.match(regexPath));

    return currentRoute ? currentRoute : false;
}

function checkForUnAuthorizedAccess(path) {

    let userData = getDataFromStorage('userData');

    if (userData && userData.isLogged) return true;

    return forbiddenForGuestPath.find(x => x == path) ? false : true;

}
