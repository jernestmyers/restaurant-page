function loadMenuContent(container) {
    const menuHeader = document.createElement(`h2`);
    const menuContainer = document.createElement(`div`);
    const drinks = document.createElement(`img`);
    const cookies = document.createElement(`img`);
    const cupcakes = document.createElement(`img`);
    const pies = document.createElement(`img`);
    const drinksText = document.createElement(`p`);
    const cookiesText = document.createElement(`p`);
    const cupcakesText = document.createElement(`p`);
    const piesText = document.createElement(`p`);

    menuContainer.setAttribute(`id`, `menu-container`);
    drinks.setAttribute(`src`, `./imgs/toddler-cappucino.jpg`);
    cookies.setAttribute(`src`, `../dist/imgs/cookies.jpg`);
    cupcakes.setAttribute(`src`, `../dist/imgs/cupcakes.jpg`);
    pies.setAttribute(`src`, `../dist/imgs/pies.png`);

    menuHeader.textContent = `menu`;
    drinksText.textContent = `coffee drinks: $3`;
    cookiesText.textContent = `cookies: $2 each`;
    cupcakesText.textContent = `cupcakes: $3 each`;
    piesText.textContent = `tiny pies: $10 each`;

    menuContainer.appendChild(drinks);
    menuContainer.appendChild(drinksText);
    menuContainer.appendChild(cookies);
    menuContainer.appendChild(cookiesText);
    menuContainer.appendChild(cupcakes);
    menuContainer.appendChild(cupcakesText);
    menuContainer.appendChild(pies);
    menuContainer.appendChild(piesText);

    container.appendChild(menuHeader);
    container.appendChild(menuContainer);
}

export {loadMenuContent}