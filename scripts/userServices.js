import { redirect } from './router.js';
import { saveDataInStorage, deleteDataFromStorage } from './authServices.js';

const apiKey = "AIzaSyAkl19DDzE8x0ftC5SwNggOHSu3IAyh7jI";

const endpoints = {
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
}

const request = {

    post: (url, body = {}) => fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        returnSecureToken: true
    }),

}

// TODO :: optimize it with function with switch
const checkOnSubmit = {

    register: (emailElement, passwordElement, repPasswordElement) => {

        let email = emailElement.value;
        let password = passwordElement.value;
        let repeatPassword = repPasswordElement.value;


        //TODO:: send notification
        if (!email || !password || !repeatPassword) return false;

        if (password !== repeatPassword) {
            console.log(1);
            passwordElement.value = '';
            repPasswordElement.value = '';
            return false;
        }

        return true;
    },

    login: (emailElement, passwordElement) => {

        let email = emailElement.value;
        let password = passwordElement.value;

        if (!email || !password) return false;

        return true;
    }
}

export async function register() {

    let emailElement = document.querySelector('.registerEmail');
    let passwordElement = document.querySelector('.registerPassword');
    let repeatPasswordElement = document.querySelector('.repeatPassword');

    if (!checkOnSubmit.register(emailElement, passwordElement, repeatPasswordElement)) return;

    let body = { email: emailElement.value, password: passwordElement.value }

    let response = await request.post(endpoints.register, body);

    if (response.ok) redirect('/login');

    //TODO :: else error notification!

}

export async function login() {

    let emailElement = document.querySelector('.loginEmail');
    let passwordElement = document.querySelector('.loginPassword');

    if (!checkOnSubmit.login(emailElement, passwordElement)) return;

    let body = { email: emailElement.value, password: passwordElement.value }

    let response = await request.post(endpoints.login, body);

    let userData = { isLogged: false }

    if (!response.ok) {

        saveDataInStorage('userData', userData);
        // TODO : show error notification
        return;

    } else {

        let data = await response.json();
        userData.isLogged = true;
        let userId = data.localId;
        saveDataInStorage('userData', { ...userData, userId });
        redirect('/');

    }
}

export function logout() {

    deleteDataFromStorage('userData');

    redirect('/');
}