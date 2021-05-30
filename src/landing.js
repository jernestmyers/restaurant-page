function loadHeader() {
    const pageHeader = document.createElement(`header`);
    const restaurantTitle = document.createElement(`h1`);
    const navMenu = document.createElement(`nav`);
    const aboutButton = document.createElement(`button`);
    const menuButton = document.createElement(`button`);
    const contactButton = document.createElement(`button`);
    
    restaurantTitle.textContent = `toddler bakery & cafe`;
    pageHeader.appendChild(restaurantTitle);
    
    aboutButton.textContent = `about`;
    menuButton.textContent = `menu`;
    contactButton.textContent = `find us`;
    
    pageHeader.appendChild(navMenu);
    navMenu.appendChild(aboutButton);
    navMenu.appendChild(menuButton);
    navMenu.appendChild(contactButton);

    return pageHeader;
}

function loadLandingContent(container) {
    const welcomeMessage = document.createElement(`h2`);
    const imageContainer = document.createElement(`div`);
    const childBaker = document.createElement(`img`);
    const childBarista = document.createElement(`img`);
    const childBakers = document.createElement(`img`);
    const childMessyBaker = document.createElement(`img`);
    const pageTextContent = document.createElement(`p`);

    imageContainer.setAttribute(`id`, `image-container`);
    welcomeMessage.textContent = `welcome to where the wee ones run the show!`
    childBaker.setAttribute(`src`, `./imgs/toddler-baking-mom.jpg`);
    childBarista.setAttribute(`src`, `../src/imgs/toddler-barista-machine.jpg`);
    childBakers.setAttribute(`src`, `../src/imgs/toddlers-baking.png`);
    childMessyBaker.setAttribute(`src`, `../src/imgs/toddler-sticky-fingers.jpg`);

    imageContainer.appendChild(childBaker);
    imageContainer.appendChild(childBarista);
    imageContainer.appendChild(childBakers);
    imageContainer.appendChild(childMessyBaker);

    pageTextContent.textContent = `why toddler bakery & cafe? we know how to have fun and we are sure to put a smile on your face! we may burn the cookies, forget to wash our hands, or be incomprehensible, but we're earnest and cute and that's enough.`;

    container.appendChild(welcomeMessage);
    container.appendChild(imageContainer);
    container.appendChild(pageTextContent);
}

function loadFooter() {
    const footerContainer = document.createElement(`footer`);
    const footerContent = document.createElement(`p`);
    const twitterIcon = document.createElement(`img`);
    const instagramIcon = document.createElement(`img`);
    const yelpIcon = document.createElement(`img`);

    footerContainer.setAttribute(`id`, `footer-container`);
    twitterIcon.setAttribute(`src`, `../src/imgs/twitter.svg`);
    twitterIcon.classList.add(`footer-icons`);
    instagramIcon.setAttribute(`src`, `../src/imgs/instagram.png`);
    instagramIcon.classList.add(`footer-icons`);
    yelpIcon.setAttribute(`src`, `../src/imgs/yelp-burst.png`);
    yelpIcon.classList.add(`footer-icons`);

    footerContainer.appendChild(twitterIcon);
    footerContainer.appendChild(instagramIcon);
    footerContainer.appendChild(yelpIcon);

    return footerContainer
}

export {
    loadHeader,
    loadLandingContent,
    loadFooter
} 
