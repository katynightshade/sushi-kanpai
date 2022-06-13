import '../dist/style.css';

function homeSetup() {
    const bodyContent = document.createElement('div');
    bodyContent.classList.add('body-div');

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
    p2.setAttribute('id', 'person2');
    p4.setAttribute('id', 'person4');

    const tm1 = document.createElement('p'), tm2 = document.createElement('p'), tm3 = document.createElement('p'), tm4 = document.createElement('p');
    tm1.textContent = 'Store Manager', tm2.textContent = 'Lead Chef', tm3.textContent = 'Sous Chef', tm4.textContent = 'Lead Server';
    tm1.classList.add('team-member'), tm2.classList.add('team-member'), tm3.classList.add('team-member'), tm4.classList.add('team-member');
    tm2.setAttribute('id', 'tm2'), tm4.setAttribute('id', 'tm4');


    const tp1 = document.createElement('div'), tp2 = document.createElement('div'), tp3 = document.createElement('div'), tp4 = document.createElement('div');
    tp1.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">', tp2.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">', tp3.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">', tp4.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">';
    tp1.classList.add('team-pic'), tp2.classList.add('team-pic'), tp3.classList.add('team-pic'), tp4.classList.add('team-pic');
    tp2.setAttribute('id', 'tp2'), tp4.setAttribute('id', 'tp4');

    p1.append(tm1, tp1);
    p2.append(tm2, tp2);
    p3.append(tm3, tp3);
    p4.append(tm4, tp4);

    main.append(p1, p2, p3, p4);
    hero.appendChild(main);
    
    const footer = document.createElement('footer');
    const fname = document.createElement('div');
    fname.classList.add('footer-name');     
    const code = document.createElement('div');

    fname.textContent = 'Katy Nightshade 2022';
    code.innerHTML = '<p><a href="https://github.com/katynightshade/sushi-kanpai" class="code-link">GitHub</a></p>';

    footer.append(fname, code);

    bodyContent.append(hero, footer);

    return bodyContent;
}

export function home() {
    const container = document.querySelector('#container');
    container.textContent = '';
    container.appendChild(homeSetup());
}