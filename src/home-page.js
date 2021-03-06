import '../dist/style.css';
import Chef from './img/chef1.jpg';

function homeSetup() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const main = document.createElement('div');
    main.classList.add('main');
    const title = document.createElement('p');
    title.textContent = 'Meet Our Team!'
    title.classList.add('title');
    main.appendChild(title);

    const p1 = document.createElement('div'), p2 = document.createElement('div'), p3 = document.createElement('div'), p4 = document.createElement('div');
    p1.classList.add('p1'), p2.classList.add('p1'), p3.classList.add('p1'), p4.classList.add('p1');

    const tm1 = document.createElement('p'), tm2 = document.createElement('p'), tm3 = document.createElement('p'), tm4 = document.createElement('p');
    tm1.textContent = 'Store Manager', tm2.textContent = 'Lead Chef', tm3.textContent = 'Sous Chef', tm4.textContent = 'Lead Server';
    tm1.classList.add('team-member'), tm2.classList.add('team-member'), tm3.classList.add('team-member'), tm4.classList.add('team-member');


    const tp1 = document.createElement('img'), tp2 = document.createElement('img'), tp3 = document.createElement('img'), tp4 = document.createElement('img');
    tp1.src = Chef; 
    tp1.alt= 'Employee image'; 
    tp2.src = Chef; 
    tp2.alt='Employee image'; 
    tp3.src = Chef; 
    tp3.alt='Employee image'; 
    tp4.src = Chef; 
    tp4.alt='Employee image';
    tp1.classList.add('team-pic'), tp2.classList.add('team-pic'), tp3.classList.add('team-pic'), tp4.classList.add('team-pic');

    p1.append(tm1, tp1);
    p2.append(tm2, tp2);
    p3.append(tm3, tp3);
    p4.append(tm4, tp4);

    main.append(p1, p2, p3, p4);
    
    hero.appendChild(main);

    return hero;
}

export function home() {
    const container = document.querySelector('#container');
    container.textContent = '';
    container.appendChild(homeSetup());
}