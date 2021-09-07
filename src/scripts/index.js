// modules
import { initialPage } from './loadPage.js';
import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

// styling
import '../styles/reset.css';
import '../styles/styles.css';

initialPage.init();

const tabs = (function() {
    // cache DOM
    const siteName = document.querySelector('#site-name');
    const tabLinks = Array.from(document.querySelector('#tab-links').childNodes);
    const main = document.querySelector('main');

    const [homeLink, menuLink, contactLink] = tabLinks;

    // bind events
    siteName.addEventListener('click', loadHome);
    homeLink.addEventListener('click', loadHome);
    menuLink.addEventListener('click', loadMenu);
    contactLink.addEventListener('click', loadContact);

    function loadHome() {
        main.innerHTML = '';
        main.appendChild(home.init());
    }

    function loadMenu() {
        main.innerHTML = '';
        main.appendChild(menu.init());
    }

    function loadContact() {
        main.innerHTML = '';
        main.appendChild(contact.init());
    }
})();