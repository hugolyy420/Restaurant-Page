import printHomePageContent from './home';
import printMenuContent from './menu';
import printContactContent from './contact';
import './styles.css';
import image1 from './images/menu-image-1.jpg';
import image2 from './images/menu-image-2.jpg';
import image3 from './images/menu-image-3.jpg';
import image4 from './images/map.png';

const container = document.querySelector('#content');
const navButtons = document.querySelectorAll('.nav-tab');

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].dataset.id = i;
    navButtons[i].addEventListener('click', renderPageContent);
    navButtons[i].addEventListener('click', changeTabFocus);
}

function renderPageContent (e) {
    container.innerHTML = "";
    if (e.target.dataset.id === "0") {
        container.appendChild(printHomePageContent());
        return
    }
    if (e.target.dataset.id === "1") {
        container.appendChild(printMenuContent());
        return
    } else {
        container.appendChild(printContactContent());
        return
    }
};

function changeTabFocus (e) {
    let activeTab = document.querySelector('.active');
    activeTab.classList.toggle('active');
    e.target.classList.add('active');
}

navButtons[0].classList.add('active');
container.appendChild(printHomePageContent());

