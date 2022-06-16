import '../dist/style.css';
import Apps from './img/apps.jpg';
import Entree from './img/entree.jpg';
import Rolls from './img/rolls.jpg';
import Special from './img/spc-rolls.jpg';
import Combos from './img/combos.jpg';
import Kids from './img/kids.jpg';

function menuSetup() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const main = document.createElement('div');
    main.classList.add('main');
    const m1 = document.createElement('img'), m2 = document.createElement('img'), m3 = document.createElement('img'), m4 = document.createElement('img'), m5 = document.createElement('img'), m6 = document.createElement('img');
    m1.classList.add('menu-img'), m2.classList.add('menu-img'), m3.classList.add('menu-img'), m4.classList.add('menu-img'), m5.classList.add('menu-img'), m6.classList.add('menu-img');
    m1.src = Apps;
    m1.alt = 'Appetizers';
    m2.src = Entree;
    m2.alt = 'Entrees';
    m3.src = Rolls;
    m3.alt = 'Rolls';
    m4.src = Special;
    m4.alt = 'Special Rolls';
    m5.src = Combos;
    m5.alt = 'Combos and Nigiri';
    m6.src = Kids;
    m6.alt = 'Kids Menu and Desserts';
    main.append(m1, m2, m3, m4, m5, m6);

    hero.appendChild(main);

    return hero;
}

export function menu() {
    const container = document.querySelector('#container');
    container.textContent = '';
    container.appendChild(menuSetup());
}