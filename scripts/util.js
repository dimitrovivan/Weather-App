import { saveDataInStorage } from "./authServices.js";
import { showNotification } from './notification.js';

export  function passLocation() {

    let getWeatherBtn = document.querySelector('.get-weather-button');
    let inputElement = document.querySelector('.search-input');

    let inputString = inputElement.value;

    if(!inputString) {
        showNotification("error", "Please fill the field");
        return;
    }

    let regex = /^[ a-zA-Z]+( *[a-zA-Z ]+)*$/g;

    if(!inputString.match(regex)) {
        showNotification("error", "Invalid format. Do not use special chars or cyrylic");
        return;
    } 

    let modifiedString = inputString.split(' ').filter(word => word != '').join(' ');
    
    getWeatherBtn.href = `/weather/${modifiedString.toLowerCase()}`;
    saveDataInStorage('location', {name: modifiedString});

    inputElement.value = '';
}

export function backOnPush() {
    history.back();
}

export function animateBurger() {

    let burgerMenuWrapperElement = document.querySelector('.top-navigation__show-list');
    let rootElement = document.querySelector('.root');
    if(burgerMenuWrapperElement.classList.contains('open')) {
        rootElement.classList.remove('hiddenScroll');
        burgerMenuWrapperElement.classList.remove('open');
    } else {
        rootElement.classList.add('hiddenScroll');
        burgerMenuWrapperElement.classList.add('open');

    }             

}