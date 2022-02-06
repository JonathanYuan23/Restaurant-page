const home = (function () {
    function init() {
        const content = document.createElement('section');
        content.id = 'home-page';
        content.classList.add('rounded-container-3');

        const slogan = document.createElement('h1');
        slogan.textContent = 'The best ramen in Canada';

        const establishDate = document.createElement('h2');
        establishDate.textContent = 'Est. 1997';

        content.appendChild(slogan);
        content.appendChild(establishDate);

        return content;
    }

    return {
        init,
    };
})();

export {home};