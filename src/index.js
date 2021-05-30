import {loadHeader, loadLandingContent} from './landing.js';
import {loadMenuContent} from './menu.js';

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
        contentContainer.innerHTML = `you are here.`;
    }
    console.log(e.target.textContent);
}

// loads header as firstChild to body
document.body.insertBefore(loadHeader(), contentContainer);

// loads landing page as onlyChild to #content
function compileLandingContent() {
    return loadLandingContent(contentContainer);
}
contentContainer.appendChild(compileLandingContent());
// -------------------------------------------- //


function compileMenuContent() {
    return loadMenuContent(contentContainer);
}

// contentContainer.appendChild(compileMenuContent());