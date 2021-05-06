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