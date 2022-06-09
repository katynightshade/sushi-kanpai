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
    const empList = ['Manager Name', 'Lead Chef Name', 'Sous Chef Name', 'Lead Server Name'];
    for (let i = 0; i < empList.length; i++) {
        for (let i = 0; i < main.length; i++) {
            const p1 = document.createElement('div');
            const teamMember = document.createElement('p');
            const teamPic = document.createElement('img');
            p1.classList.add('p1');
            teamMember.classList.add('team-member');
            teamPic.classList.add('team-pic');
            p1.append(teamMember, teamPic);
            main.append(p1);
        }
    }
    
    content.appendChild(header);
    return content;
}