import { redirect } from './router.js';
import { saveDataInStorage, deleteDataFromStorage } from './authServices.js';
import { showNotification } from './notification.js';

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

const checkOnSubmit = {

    register: (emailElement, passwordElement, repPasswordElement) => {

        let email = (emailElement.value).toLowerCase();
        let password = passwordElement.value;
        let repeatPassword = repPasswordElement.value;


        if (!email || !password || !repeatPassword) {
            emailElement.value = '';
            showNotification("error", "Please fill all fields");
            return false;
        }

        if (!checkEmailValidation(email)) {
            showNotification("error", "Invalid email... Example: showEmail@mail.bg");
            return false;
        }

        if (password !== repeatPassword) {
            passwordElement.value = '';
            repPasswordElement.value = '';
            showNotification("error", "Password missmatch");
            return false;
        }

        return true;
    },

    login: (emailElement, passwordElement) => {

        let email = (emailElement.value).toLowerCase();
        let password = passwordElement.value;

        if (!email || !password) {
            showNotification("error", "Please fill all fields");
            return false;
        }

        if (!checkEmailValidation(email)) {
            emailElement.value = '';
            showNotification("error", "Invalid email... Example: showemail@mail.bg");
            return false;
        }

        return true;
    }
}

export async function register() {

    let emailElement = document.querySelector('.registerEmail');
    let passwordElement = document.querySelector('.registerPassword');
    let repeatPasswordElement = document.querySelector('.repeatPassword');

    if (!checkOnSubmit.register(emailElement, passwordElement, repeatPasswordElement)) return;

    let body = { email: emailElement.value, password: passwordElement.value }

    try {
        let response = await request.post(endpoints.register, body);

        if (response.ok) {
            showNotification("success", "Successfully registrated");
            return redirect('/login');
        }

        throw new Error("Server failed to execute your request, please try again later.");

    } catch (error) {

        showNotification("error", error.message);
    }

}

export async function login() {

    let emailElement = document.querySelector('.loginEmail');
    let passwordElement = document.querySelector('.loginPassword');

    if (!checkOnSubmit.login(emailElement, passwordElement)) return;

    let body = { email: emailElement.value, password: passwordElement.value }

    let userData = { isLogged: false };

    try {

    let response = await request.post(endpoints.login, body);

    if(!response.ok) throw new Error("Wrong username or password");

    let data = await response.json();

    userData.isLogged = true;

    let userId = data.localId;

    saveDataInStorage('userData', { ...userData, userId });
    
    showNotification("success", "Logged in");
    redirect('/');

    } catch (error) {

    saveDataInStorage('userData', userData);
    showNotification("error", error.message);

    }
}

export function logout() {

    deleteDataFromStorage('userData');
    showNotification("success", "Logged out");
    redirect('/');
}

function checkEmailValidation(email) {

    let regex = /^[a-zA-Z\d]+@[a-zA-Z]+\.[a-zA-Z]+$/g;

    let result = email.match(regex);

    if(result) return true;

    return false;
}