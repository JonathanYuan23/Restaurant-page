// assets
import ramenShop from '../images/ramen-shop.jpg';
import ramenIcon from '../images/ramen-icon.png';
import redGarnet from '../images/red-garnet.png';
import tsunamiWhitePearl from '../images/tsunami-white-pearl.png';
import flyingVeganHarvest from '../images/flying-vegan-harvest.png';
import tonkotsuBlack from '../images/tonkotsu-black.jpg';
import spicyChickenRamen from '../images/spicy-chicken-ramen.jpg';

// styling
import '../styles/reset.css';
import '../styles/styles.css';

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

const home = document.querySelector('#site-name');
const content = document.querySelector('main');
const links = document.querySelector('#tab-links').childNodes;
let contactForm;

home.addEventListener('click', function() {
    content.innerHTML = `<section id="home-page">
                    <h1>The best ramen in Canada</h1>
                    <h2>Est. 1997</h2>
                </section>`;
})

links[1].addEventListener('click', function () {
    content.innerHTML = `<section id="home-page">
                    <h1>The best ramen in Canada</h1>
                    <h2>Est. 1997</h2>
                </section>`;
});

links[3].addEventListener('click', function () {
    content.innerHTML = `<section id="menu-items">
                    <header id="menu-header">
                        <span>5 different choices</span>
                        <h1>Our ramen</h1>
                    </header>
                    <div class="hr"></div>
                    <div class="menu-item">
                        <img src="../src/images/red-garnet.png" alt="" width="250px" />
                        <div class="ramen-info">
                            <h3>The Red Garnet</h3>
                            <div class="hr short"></div>
                            <p>
                                Vegetable broth: pork chashu, spinach, green onions, kikurage, white onions with chili
                                garlic sauce. Served with thick noodles. Crispy Chicken (2 pcs) features juicy fried
                                chicken thighs with our original garlic pepper
                            </p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="menu-item">
                        <img src="../src/images/flying-vegan-harvest.png" alt="" width="250px" />
                        <div class="ramen-info">
                            <h3>Flying Vegan Harvest</h3>
                            <div class="hr short"></div>
                            <p>
                                Vegan miso broth: Impossible™ meat made from plants, tofu, bean sprouts, broccolini,
                                green onion, corn, red onion, crispy garlic and chili seasoning » served with thick
                                noodles
                            </p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="menu-item">
                        <img src="../src/images/spicy-chicken-ramen.jpg" alt="" width="250px" />
                        <div class="ramen-info">
                            <h3>Spicy Chicken Ramen</h3>
                            <div class="hr short"></div>
                            <p>
                                Chicken broth: chicken chashu, kikurage, spicy bean sprouts and green onion » served
                                with thin noodles (Choose your spice level, MILD, SPICY or HOT.)
                            </p>
                        </div>
                    </div>
                    <div class="hr"></div>
                </section>`;
});

links[5].addEventListener('click', function () {
    content.innerHTML = `<section id="contact-form">
                    <form action="">
                        <header id="contact-header">
                            <h1>Contact form</h1>
                        </header>
                        <input type="text" name="name" id="name" placeholder="Name *">
                        <input type="email" name="email" id="email" placeholder="Email *">
                        <textarea name="message" id="message" placeholder="Write your message here..."></textarea>
                        <input type="submit" value="Submit">
                    </form>
                </section>`;
    contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
});

console.log(links);
