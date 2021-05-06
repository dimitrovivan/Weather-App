import { saveDataInStorage } from "./authServices.js";

export  function passLocation() {

    let inputElement = document.querySelector('.search-input').value;

    document.querySelector('.get-weather-button').href = `/weather/${inputElement}`;

    saveDataInStorage('location', {name: inputElement});
}

export function backOnPush() {
    history.back();
}