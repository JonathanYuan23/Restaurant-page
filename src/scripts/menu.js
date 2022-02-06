// assets
import redGarnet from '../images/red-garnet.png';
import tsunamiWhitePearl from '../images/tsunami-white-pearl.png';
import flyingVeganHarvest from '../images/flying-vegan-harvest.png';
import tonkotsuBlack from '../images/tonkotsu-black.jpg';
import spicyChickenRamen from '../images/spicy-chicken-ramen.jpg';

const ramens = [
    {
        name: 'The Red Garnet',
        description:
            'Vegetable broth: pork chashu, spinach, green onions, kikurage, white onions with chili garlic sauce. Served with thick noodles. Crispy Chicken (2 pcs) features juicy fried chicken thighs with our original garlic pepper',
        src: redGarnet,
    },
    {
        name: 'Tsunami White Pearl',
        description:
            'Vegan vegetable broth: Impossible™ meat made from plants, green onion, red onion, spinach, broccolini, baby leaf, crispy garlic, garlic oil. Served with Thick Noodle.',
        src: tsunamiWhitePearl,
    },
    {
        name: 'Flying Vegan Harvest',
        description:
            'Vegan miso broth: Impossible™ meat made from plants, tofu, bean sprouts, broccolini, green onion, corn, red onion, crispy garlic and chili seasoning » served with thick noodles',
        src: flyingVeganHarvest,
    },
    {
        name: 'Tonkotsu Black',
        description:
            'Pork broth: pork chashu, kikurage, green onion, nori dried seaweed, seasoned egg*, garlic chips, garlic oil, fried onion and spicy sauce » served with thin noodles',
        src: tonkotsuBlack,
    },
    {
        name: 'Spicy Chicken Ramen',
        description:
            'Chicken broth: chicken chashu, kikurage, spicy bean sprouts and green onion » served with thin noodles (Choose your spice level, MILD, SPICY or HOT.)',
        src: spicyChickenRamen,
    },
];

const menu = (function () {
    function init() {
        const content = document.createElement('section');
        content.id = 'menu-items';
        content.classList.add('rounded-container-5');

        content.appendChild(loadMenuHeader());
        content.appendChild(loadHorizontalRule(0));

        for (let i = 0; i < ramens.length; i++) {
            content.appendChild(loadMenuItem(ramens[i]));
            content.appendChild(loadHorizontalRule(0));
        }

        return content;
    }

    function loadMenuHeader() {
        const menuHeader = document.createElement('header');
        menuHeader.id = 'menu-header';

        const choicesNumber = document.createElement('span');
        choicesNumber.textContent = '5 different choices';

        const menuMessage = document.createElement('h1');
        menuMessage.textContent = 'Our ramen';

        menuHeader.appendChild(choicesNumber);
        menuHeader.appendChild(menuMessage);

        return menuHeader;
    }

    function loadMenuItem(ramen) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const ramenImg = new Image();
        ramenImg.src = ramen.src;
        ramenImg.setAttribute('width', '250px');
        ramenImg.setAttribute('height', '250px');

        const ramenInfo = document.createElement('div');
        ramenInfo.classList.add('ramen-info');

        const ramenName = document.createElement('h3');
        ramenName.textContent = ramen.name;

        const ramenDescription = document.createElement('p');
        ramenDescription.textContent = ramen.description;

        ramenInfo.appendChild(ramenName);
        ramenInfo.appendChild(loadHorizontalRule(1));
        ramenInfo.appendChild(ramenDescription);

        menuItem.appendChild(ramenImg);
        menuItem.appendChild(ramenInfo);

        return menuItem;
    }

    function loadHorizontalRule(short) {
        const hr = document.createElement('div');
        hr.classList.add('hr');
        if (short) hr.classList.add('short');
        return hr;
    }

    return {
        init,
    };
})();

export { menu };
