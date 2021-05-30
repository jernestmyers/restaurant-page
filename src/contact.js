function loadContactContent(container) {
    const contactHeader = document.createElement(`h2`);
    const contactContainer = document.createElement(`div`);
    const addressContainer = document.createElement(`div`);
    const hoursContainer = document.createElement(`div`);
    const mapContainer = document.createElement(`div`);
    const address = document.createElement(`p`);
    const map = document.createElement(`img`);
    const hours = document.createElement(`p`);

    contactHeader.textContent = `hours and location`
    contactContainer.setAttribute(`id`, `contact-container`);
    addressContainer.setAttribute(`id`, `address-container`);
    hoursContainer.setAttribute(`id`, `hours-container`);
    mapContainer.setAttribute(`id`, `map-container`);
    map.setAttribute(`src`, `imgs/map.png`);
    hours.innerHTML = `<strong>open daily</strong> <br><br>mornings: 7am to 11am<br><br><em>closed for nap time</em><br><br>afternoons: 2pm to 5pm`; 
    address.innerHTML = `<strong>address</strong><br>123 e austin st, austin, tx 78702<br><br><strong>phone</strong><br>512-123-4567`
    address.classList.add(`contact-text`);
    hours.classList.add(`contact-text`);

    addressContainer.appendChild(address);
    hoursContainer.appendChild(hours);
    mapContainer.appendChild(map);

    contactContainer.appendChild(addressContainer);
    contactContainer.appendChild(hoursContainer);
    contactContainer.appendChild(mapContainer);

    container.appendChild(contactHeader);
    container.appendChild(contactContainer);
}

export {loadContactContent}