import '../dist/style.css';

function menuSetup() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const main = document.createElement('div');
    main.classList.add('main');
    const m1 = document.createElement('div'), m2 = document.createElement('div'), m3 = document.createElement('div'), m4 = document.createElement('div'), m5 = document.createElement('div'), m6 = document.createElement('div');
    m1.classList.add('menu-img'), m2.classList.add('menu-img'), m3.classList.add('menu-img'), m4.classList.add('menu-img'), m5.classList.add('menu-img'), m6.classList.add('menu-img');
    m1.innerHTML = '<img src="../dist/img/apps.jpg" alt="Appetizers">';
    m2.innerHTML = '<img src="../dist/img/entree.jpg" alt="Entree Specials">';
    m3.innerHTML = '<img src="../dist/img/rolls.jpg" alt="Classic Rolls">';
    m4.innerHTML = '<img src="../dist/img/spc-rolls.jpg" alt="Special Rolls">';
    m5.innerHTML = '<img src="../dist/img/combos.jpg" alt="Sushi Combos/Nigiri">';
    m6.innerHTML = '<img src="../dist/img/kids.jpg" alt="Kids Menu/Desserts">';
    main.append(m1, m2, m3, m4, m5, m6);

    hero.appendChild(main);

    return hero;
}

export function menu() {
    const container = document.querySelector('#container');
    container.textContent = '';
    container.appendChild(menuSetup());
}