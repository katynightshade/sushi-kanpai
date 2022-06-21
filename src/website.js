import {home} from './home-page.js';
import {menu} from './menu.js';
import {contact} from './contact.js';
import Logo from './img/logo.png';

function createNav() {
    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('img');
    logo.src = Logo;
    logo.alt = 'Sushi Kanpai';
    logo.classList.add('logo');    
    header.appendChild(logo);

    const navList = document.createElement('div');
    navList.classList.add('nav-list');
    const navUL = document.createElement('ul');
    navUL.classList.add('nav-ul');

    const homeBtn = document.createElement('li');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('site-nav');
    homeBtn.setAttribute('id', 'home');
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeBtn);
        home();
    });
    
    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('site-nav');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuBtn);
        menu();
    });

    const contactBtn = document.createElement('li');
    contactBtn.textContent = 'Contact';
    contactBtn.classList.add('site-nav');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactBtn);
        contact();
    });
    
    navUL.append(homeBtn, menuBtn, contactBtn);
    navList.appendChild(navUL);
    header.appendChild(navList);

    return header;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.site-nav');
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

function mainContent() {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    return container;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const fname = document.createElement('div');
    fname.classList.add('footer-name');     
    const code = document.createElement('div');
    code.classList.add('code-link');

    fname.textContent = 'Katy Nightshade 2022';
    code.innerHTML = '<p><a href="https://github.com/katynightshade/sushi-kanpai">GitHub</a></p>';

    footer.append(fname, code);

    return footer;
}

export function onStartUp() {
    const content = document.querySelector('#content');

    content.appendChild(createNav());
    content.appendChild(mainContent());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector('.site-nav'));
    home();
}