import printHomePageContent from './home';
import printMenuContent from './menu';
import './styles.css';
import image1 from './images/menu-image-1.jpg';
import image2 from './images/menu-image-2.jpg';
import image3 from './images/menu-image-3.jpg';

const container = document.querySelector('#content');
const navButtons = document.querySelectorAll('.nav-tab');

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].dataset.id = i;
    navButtons[i].addEventListener('click', renderPageContent);
}

function renderPageContent (e) {
    container.innerHTML = "";
    if (e.target.dataset.id === "0") {
        container.appendChild(printHomePageContent());
    }
    if (e.target.dataset.id === "1") {
        container.appendChild(printMenuContent());
    }
};

container.appendChild(printHomePageContent());

