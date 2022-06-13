import '../dist/style.css';

function contactSetup() {
    const bodyContent = document.createElement('div');
    bodyContent.classList.add('body-div');

    const hero = document.createElement('div');
    hero.classList.add('hero');
    const main = document.createElement('div');
    main.classList.add('main');
    const title = document.createElement('p');
    title.classList.add('contact-title');
    main.appendChild(title);
    const grid = document.createElement('div');
    grid.classList.add('contact-grid');
    const g1 = document.createElement('div'), g2 = document.createElement('div');
    g1.classList.add('grid-div'), g2.classList.add('grid-div');

    const phone = document.createElement('div');
    const address = document.createElement('div');
    phone.innerHTML = '<p class="phone"><b>Phone:</b>  <a href="tel:+17195742412">(719) 574-2412</a></p>';
    address.innerHTML = '<p class="address"><b>Address:</b>  <a href="https://www.google.com/maps/dir//sushi+near+me/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x871349522fe439cf:0x713790292fdcb217?sa=X&ved=2ahUKEwjbk-SAiav4AhUHb80KHaAhBTEQ9Rd6BAgJEAQ">5935 Dublin Blvd #100, Colorado Springs, CO 80923</a></p>';
    g1.append(phone, address);

    const map = document.createElement('div');
    map.innerHTML = '<iframe class = "map" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d99319.11456861676!2d-104.73659008153868!3d38.930323623909594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x871349522fe439cf%3A0x713790292fdcb217!2ssushi%20near%20me!3m2!1d38.923665899999996!2d-104.71843589999999!5e0!3m2!1sen!2sus!4v1655145863615!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    g2.append(map);

    grid.append(g1, g2);
    main.appendChild(grid);
    hero.appendChild(main);

    const footer = document.createElement('footer');
    const fname = document.createElement('div');
    fname.classList.add('footer-name');     
    const code = document.createElement('div');
    code.classList.add('code-link');

    fname.textContent = 'Katy Nightshade 2022';
    code.innerHTML = '<p><a href="https://github.com/katynightshade/sushi-kanpai">GitHub</a></p>';

    footer.append(fname, code);

    bodyContent.append(hero, footer);

    return bodyContent;
}

export function contact() {
    const container = document.querySelector('#container');
    container.textContent = '';
    container.appendChild(contactSetup());
}