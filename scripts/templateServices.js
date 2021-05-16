import { render } from '../../node_modules/lit-html/lit-html.js';
import  homeTemplate from '../templates/home.js';
import  aboutTemplate from '../templates/about.js';
import  weatherTemplate from '../templates/weather.js';
import  loginTemplate from '../templates/login.js';
import  registerTemplate from '../templates/register.js';
import  weatherForecast from '../templates/weatherForecast.js';
import  notFound from '../templates/notFound.js';

let rootElement = document.querySelector('.root');

export const rootRender = (template) => render(template, rootElement);

export const getTemplate = (templateName, context) => {
    
    switch(templateName) {

        case 'home': return homeTemplate(context);
        case 'about': return aboutTemplate(context);
        case 'weather': return weatherTemplate(context);
        case 'login': return loginTemplate(context);
        case 'register': return registerTemplate(context);
        case 'forecast': return weatherForecast(context);
        case 'notFound': return notFound(context);
        
    }
}
