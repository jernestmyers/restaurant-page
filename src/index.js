import {loadHeader, loadLandingContent, loadFooter} from './landing.js';
import {loadMenuContent} from './menu.js';
import {loadContactContent} from './contact.js';

const contentContainer = document.querySelector(`#content`);
window.addEventListener(`click`, displayPage);

function displayPage(e) {
    if (e.target.textContent === `about`||
        e.target.textContent === `menu` ||
        e.target.textContent === `find us`) {
            while(contentContainer.lastChild) {
                contentContainer.removeChild(contentContainer.lastChild);
            }
        }
    if (e.target.textContent === `about`) {
        contentContainer.appendChild(compileLandingContent());
    } else if (e.target.textContent === `menu`) {
        contentContainer.appendChild(compileMenuContent());
    } else if (e.target.textContent === `find us`) {
        contentContainer.appendChild(compileContactContent());
    }
}

// loads header and footer on page load
document.body.insertBefore(loadHeader(), contentContainer);
document.body.appendChild(loadFooter());

// loads landing page as onlyChild to #content on page load
function compileLandingContent() {
    return loadLandingContent(contentContainer);
}
contentContainer.appendChild(compileLandingContent());
// -------------------------------------------- //


function compileMenuContent() {
    return loadMenuContent(contentContainer);
}

function compileContactContent() {
    return loadContactContent(contentContainer);
}