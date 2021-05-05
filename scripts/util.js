import { saveDataInStorage } from "./authServices.js";

export function passLocation() {

    let inputElement = document.querySelector('.search-input').value;

    saveDataInStorage('location', {name: inputElement});
}