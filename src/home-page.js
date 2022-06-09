export function domSetup() {
    const content = document.querySelector('#content');
    
    const header = document.createElement('div');

    const logo = document.createElement('div');
    logo.innerHTML = '<img src="../src/img/logo.png" alt="Kanpai Home">'
    logo.classList.add('logo');    
    header.appendChild(logo);

    const navList = document.createElement('div');
    navList.classList.add('nav-list');
    const navUL = document.createElement('ul');
    const li1 = document.createElement('li'), li2 = document.createElement('li'), li3 = document.createElement('li');
    li1.innerHTML = '<a href="#">Menu</a>';
    li2.innerHTML = '<a href="#">Contact</a>';
    li3.innerHTML = '<a href="#">Yelp</a>';
    navUL.append(li1, li2, li3);
    navList.appendChild(navUL);
    header.appendChild(navList);

    
    
    const hero = document.createElement('div');
    const main = document.createElement('div');
    const title = document.createElement('p');
    title.textContent = 'Meet Our Team!'
    main.appendChild(title);

    const p1 = document.createElement('div'), p2 = document.createElement('div'), p3 = document.createElement('div'), p4 = document.createElement('div');
    p1.classList.add('p1'), p2.classList.add('p1'), p3.classList.add('p1'), p4.classList.add('p1');

    const tm1 = document.createElement('p'), tm2 = document.createElement('p'), tm3 = document.createElement('p'), tm4 = document.createElement('p');
    tm1.textContent = 'Store Manager', tm2.textContent = 'Lead Chef', tm3.textContent = 'Sous Chef', tm4.textContent = 'Lead Server';
    tm1.classList.add('team-member'), tm2.classList.add('team-member'), tm3.classList.add('team-member'), tm4.classList.add('team-member');


    const tp1 = document.createElement('div'), tp2 = document.createElement('div'), tp3 = document.createElement('div'), tp4 = document.createElement('div');
    tp1.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">', tp2.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">', tp3.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">', tp4.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">';
    tp1.classList.add('team-pic'), tp2.classList.add('team-pic'), tp3.classList.add('team-pic'), tp4.classList.add('team-pic');

    p1.append(tm1, tp1);
    p2.append(tm2, tp2);
    p3.append(tm3, tp3);
    p4.append(tm4, tp4);

    main.append(p1, p2, p3, p4);
    hero.appendChild(main);
    
    content.appendChild(header);
    content.appendChild(hero);
}