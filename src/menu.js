function loadMenuContent(container) {
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
    drinks.setAttribute(`src`, `../src/imgs/toddler-cappucino.jpg`);
    cookies.setAttribute(`src`, `../src/imgs/cookies.jpg`);
    cupcakes.setAttribute(`src`, `../src/imgs/cupcakes.jpg`);
    pies.setAttribute(`src`, `../src/imgs/pies.png`);

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

    container.appendChild(menuContainer);
}

export {loadMenuContent}