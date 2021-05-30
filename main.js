/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactContent\": () => (/* binding */ loadContactContent)\n/* harmony export */ });\nfunction loadContactContent(container) {\n    const contactHeader = document.createElement(`h2`);\n    const contactContainer = document.createElement(`div`);\n    const addressContainer = document.createElement(`div`);\n    const hoursContainer = document.createElement(`div`);\n    const mapContainer = document.createElement(`div`);\n    const address = document.createElement(`p`);\n    const map = document.createElement(`img`);\n    const hours = document.createElement(`p`);\n\n    contactHeader.textContent = `hours and location`\n    contactContainer.setAttribute(`id`, `contact-container`);\n    addressContainer.setAttribute(`id`, `address-container`);\n    hoursContainer.setAttribute(`id`, `hours-container`);\n    mapContainer.setAttribute(`id`, `map-container`);\n    map.setAttribute(`src`, `../src/imgs/map.png`);\n    hours.innerHTML = `<strong>open daily</strong> <br><br>mornings: 7am to 11am<br><br><em>closed for nap time</em><br><br>afternoons: 2pm to 5pm`; \n    address.innerHTML = `<strong>address</strong><br>123 e austin st, austin, tx 78702<br><br><strong>phone</strong><br>512-123-4567`\n    address.classList.add(`contact-text`);\n    hours.classList.add(`contact-text`);\n\n    addressContainer.appendChild(address);\n    hoursContainer.appendChild(hours);\n    mapContainer.appendChild(map);\n\n    contactContainer.appendChild(addressContainer);\n    contactContainer.appendChild(hoursContainer);\n    contactContainer.appendChild(mapContainer);\n\n    container.appendChild(contactHeader);\n    container.appendChild(contactContainer);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.js */ \"./src/landing.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst contentContainer = document.querySelector(`#content`);\n\n// clears #content container and loads appropriate content\nwindow.addEventListener(`click`, displayPage);\n    function displayPage(e) {\n        if (e.target.textContent === `about`||\n            e.target.textContent === `menu` ||\n            e.target.textContent === `find us`) {\n                while(contentContainer.lastChild) {\n                    contentContainer.removeChild(contentContainer.lastChild);\n                }\n            }\n        if (e.target.textContent === `about`) {\n            contentContainer.appendChild(compileLandingContent());\n        } else if (e.target.textContent === `menu`) {\n            contentContainer.appendChild(compileMenuContent());\n        } else if (e.target.textContent === `find us`) {\n            contentContainer.appendChild(compileContactContent());\n        }\n    }\n\n// loads header and footer on page load\ndocument.body.insertBefore((0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)(), contentContainer);\ndocument.body.appendChild((0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.loadFooter)());\n\n// loads landing page as onlyChild to #content on page load\nfunction compileLandingContent() {\n    return (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.loadLandingContent)(contentContainer);\n}\ncontentContainer.appendChild(compileLandingContent());\n// -------------------------------------------- //\n\n\nfunction compileMenuContent() {\n    return (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuContent)(contentContainer);\n}\n\nfunction compileContactContent() {\n    return (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContactContent)(contentContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHeader\": () => (/* binding */ loadHeader),\n/* harmony export */   \"loadLandingContent\": () => (/* binding */ loadLandingContent),\n/* harmony export */   \"loadFooter\": () => (/* binding */ loadFooter)\n/* harmony export */ });\nfunction loadHeader() {\n    const pageHeader = document.createElement(`header`);\n    const restaurantTitle = document.createElement(`h1`);\n    const navMenu = document.createElement(`nav`);\n    const aboutButton = document.createElement(`button`);\n    const menuButton = document.createElement(`button`);\n    const contactButton = document.createElement(`button`);\n    \n    restaurantTitle.textContent = `toddler bakery & cafe`;\n    pageHeader.appendChild(restaurantTitle);\n    \n    aboutButton.textContent = `about`;\n    menuButton.textContent = `menu`;\n    contactButton.textContent = `find us`;\n    \n    pageHeader.appendChild(navMenu);\n    navMenu.appendChild(aboutButton);\n    navMenu.appendChild(menuButton);\n    navMenu.appendChild(contactButton);\n\n    return pageHeader;\n}\n\nfunction loadLandingContent(container) {\n    const welcomeMessage = document.createElement(`h2`);\n    const imageContainer = document.createElement(`div`);\n    const childBaker = document.createElement(`img`);\n    const childBarista = document.createElement(`img`);\n    const childBakers = document.createElement(`img`);\n    const childMessyBaker = document.createElement(`img`);\n    const pageTextContent = document.createElement(`p`);\n\n    imageContainer.setAttribute(`id`, `image-container`);\n    welcomeMessage.textContent = `welcome to where the wee ones run the show!`\n    childBaker.setAttribute(`src`, `../src/imgs/toddler-baking-mom.jpg`);\n    childBarista.setAttribute(`src`, `../src/imgs/toddler-barista-machine.jpg`);\n    childBakers.setAttribute(`src`, `../src/imgs/toddlers-baking.png`);\n    childMessyBaker.setAttribute(`src`, `../src/imgs/toddler-sticky-fingers.jpg`);\n\n    imageContainer.appendChild(childBaker);\n    imageContainer.appendChild(childBarista);\n    imageContainer.appendChild(childBakers);\n    imageContainer.appendChild(childMessyBaker);\n\n    pageTextContent.textContent = `why toddler bakery & cafe? we know how to have fun and we are sure to put a smile on your face! we may burn the cookies, forget to wash our hands, or be incomprehensible, but we're earnest and cute and that's enough.`;\n\n    container.appendChild(welcomeMessage);\n    container.appendChild(imageContainer);\n    container.appendChild(pageTextContent);\n}\n\nfunction loadFooter() {\n    const footerContainer = document.createElement(`footer`);\n    const footerContent = document.createElement(`p`);\n    const twitterIcon = document.createElement(`img`);\n    const instagramIcon = document.createElement(`img`);\n    const yelpIcon = document.createElement(`img`);\n\n    footerContainer.setAttribute(`id`, `footer-container`);\n    twitterIcon.setAttribute(`src`, `../src/imgs/twitter.svg`);\n    twitterIcon.classList.add(`footer-icons`);\n    instagramIcon.setAttribute(`src`, `../src/imgs/instagram.png`);\n    instagramIcon.classList.add(`footer-icons`);\n    yelpIcon.setAttribute(`src`, `../src/imgs/yelp-burst.png`);\n    yelpIcon.classList.add(`footer-icons`);\n\n    footerContainer.appendChild(twitterIcon);\n    footerContainer.appendChild(instagramIcon);\n    footerContainer.appendChild(yelpIcon);\n\n    return footerContainer\n}\n\n \n\n\n//# sourceURL=webpack://restaurant-page/./src/landing.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuContent\": () => (/* binding */ loadMenuContent)\n/* harmony export */ });\nfunction loadMenuContent(container) {\n    const menuHeader = document.createElement(`h2`);\n    const menuContainer = document.createElement(`div`);\n    const drinks = document.createElement(`img`);\n    const cookies = document.createElement(`img`);\n    const cupcakes = document.createElement(`img`);\n    const pies = document.createElement(`img`);\n    const drinksText = document.createElement(`p`);\n    const cookiesText = document.createElement(`p`);\n    const cupcakesText = document.createElement(`p`);\n    const piesText = document.createElement(`p`);\n\n    menuContainer.setAttribute(`id`, `menu-container`);\n    drinks.setAttribute(`src`, `../src/imgs/toddler-cappucino.jpg`);\n    cookies.setAttribute(`src`, `../src/imgs/cookies.jpg`);\n    cupcakes.setAttribute(`src`, `../src/imgs/cupcakes.jpg`);\n    pies.setAttribute(`src`, `../src/imgs/pies.png`);\n\n    menuHeader.textContent = `menu`;\n    drinksText.textContent = `coffee drinks: $3`;\n    cookiesText.textContent = `cookies: $2 each`;\n    cupcakesText.textContent = `cupcakes: $3 each`;\n    piesText.textContent = `tiny pies: $10 each`;\n\n    menuContainer.appendChild(drinks);\n    menuContainer.appendChild(drinksText);\n    menuContainer.appendChild(cookies);\n    menuContainer.appendChild(cookiesText);\n    menuContainer.appendChild(cupcakes);\n    menuContainer.appendChild(cupcakesText);\n    menuContainer.appendChild(pies);\n    menuContainer.appendChild(piesText);\n\n    container.appendChild(menuHeader);\n    container.appendChild(menuContainer);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;