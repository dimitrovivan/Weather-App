import { navigate, checkForPath } from './scripts/router.js';

//init function for checking inserted URL for the first time
( () => {
    let insertedPathname = location.pathname;
    if(checkForPath(insertedPathname)) return navigate(insertedPathname);
    return navigate('/');
})()

let rootElement = document.querySelector('.root');
rootElement.addEventListener('click', navigateOnClick);

function navigateOnClick(e) {
    
    e.preventDefault();

    let { target } = e;

    if(!target.tagname == "A" || !target.classList.contains('navLink')) return;

    let newURL = new URL(target.href);

    if(newURL.pathname == location.pathname) return document.querySelector('.top-navigation__show-list').classList.remove('open');

    rootElement.classList.remove('hiddenScroll');

    return navigate(newURL.pathname);
}