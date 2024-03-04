import printHomePageContent from './home';
import printMenuContent from './menu';
import './styles.css';
import image1 from './images/menu-image-1.jpg';
import image2 from './images/menu-image-2.jpg';
import image3 from './images/menu-image-3.jpg';

const container = document.querySelector('#content');
const navButtons = document.querySelectorAll('.nav-tab');
navButtons[0].classList.add('active');

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].dataset.id = i;
    navButtons[i].addEventListener('click', renderPageContent);
    navButtons[i].addEventListener('click', changeTabFocus);
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

function changeTabFocus (e) {
    let activeTab = document.querySelector('.active');
    activeTab.classList.toggle('active');
    e.target.classList.add('active');
}

container.appendChild(printHomePageContent());

