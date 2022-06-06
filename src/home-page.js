function domSetup() {
    const content = document.getElementById('content');
    
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const logoImg = document.createElement('img');
    const navList = document.createElement('div');
    const navUL = document.createElement('ul');
    const listText = ['Menu', 'Contact', 'Yelp'];
    for (let i = 0; i < listText.length; i++) {
        const listItem = document.createElement('li');
        const listLink = document.createElement('a');
        listLink.textContent = listText[i];
        listItem.appendChild(listLink);
        navUL.appendChild(listItem);
    };

    const hero = document.createElement('div');
    const main = document.createElement('div');
    const title = document.createElement('p');
    const empList = ['Manager Name', 'Lead Chef Name', 'Sous Chef Name', 'Lead Server Name'];
    for (let i = 0; i < empList.length; i++) {
        const p1 = document.createElement('div');
        const teamMember = document.createElement('p');
        const teamPic = document.createElement('img');
        p1.classList.add('p1');
        teamMember.classList.add('team-member');
        teamPic.classList.add('team-pic');
        p1.appendChild(teamMember, teamPic);
        main.appendChild(p1);
    }
    

    logo.classList.add('logo');
    logoImg.setAttribute('id', 'logo-img');
    navList.classList.add('nav-list');
    logo.appendChild(logoImg);
    navList.appendChild(navUL);
    header.appendChild(logo, navList);

    main.appendChild(title);
    hero.appendChild(main);
    content.appendChild(header, hero);
}