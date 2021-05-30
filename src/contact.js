function loadContactContent(container) {
    const contactHeader = document.createElement(`h2`);
    const contactContainer = document.createElement(`div`);
    const map = document.createElement(`img`);
    const hours = document.createElement(`p`);

    contactHeader.textContent = `hours and location`
    contactContainer.setAttribute(`id`, `contact-container`);
    map.setAttribute(`src`, `../src/imgs/map.png`);
    hours.innerHTML = `<strong>open daily</strong> <br><br>mornings: 7am to 11am<br><br><em>closed for nap time</em><br><br>afternoons: 2pm to 5pm`; 

    contactContainer.appendChild(hours);
    contactContainer.appendChild(map);

    container.appendChild(contactHeader);
    container.appendChild(contactContainer);
}

export {loadContactContent}