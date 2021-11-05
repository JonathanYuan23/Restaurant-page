// modules
import { home } from './home.js';

// assets
import ramenShop from '../images/ramen-shop.jpg';
import ramenIcon from '../images/ramen-icon.png';

const nav = (function() {

    function init() {
        const navbar = document.createElement('div');
        navbar.id = 'navbar';

        navbar.appendChild(loadSiteName());
        navbar.appendChild(loadNavLinks());

        return navbar;
    }

    function loadSiteName() {
        const siteNameContainer = document.createElement('div');
        siteNameContainer.id = 'site-name';

        const logo = new Image();
        logo.src = ramenIcon;
        logo.setAttribute('width', '35px');

        const siteName = document.createElement('h1');
        siteName.textContent = 'ramen bros';

        siteNameContainer.appendChild(logo);
        siteNameContainer.appendChild(siteName);

        return siteNameContainer;
    }

    function loadNavLinks() {
        const navLinks = document.createElement('div');
        navLinks.id = 'tab-links';

        const homeLink = document.createElement('a');
        const home = document.createElement('h2');
        home.textContent = 'Home';
        homeLink.appendChild(home);

        const menuLink = document.createElement('a');
        const menu = document.createElement('h2');
        menu.textContent = 'Menu';
        menuLink.appendChild(menu);

        const contactLink = document.createElement('a');
        const contact = document.createElement('h2');
        contact.textContent = 'Contact';
        contactLink.appendChild(contact);
        
        navLinks.appendChild(homeLink);
        navLinks.appendChild(menuLink);
        navLinks.appendChild(contactLink);

        return navLinks;
    }
    return {
        init
    }
})();

const initialPage = (function() {

    const pageBody = document.querySelector('#content');

    function init() {
        const header = document.createElement('header');
        const main = document.createElement('main');

        header.appendChild(nav.init());
        main.appendChild(home.init());

        pageBody.appendChild(header);
        pageBody.appendChild(main);
    }
    return {
        init
    }
})();

export {initialPage};