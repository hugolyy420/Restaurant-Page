function printContactContent () {
    const element = document.createElement('div');
    element.classList.add('contact-container');

    element.innerHTML = `<img src="./images/map.png" alt="restaurant-map" class="restaurant-map">
    <div>
        <div class="contact-info-holder">
            <h2>ADDRESS</h2>
            <div>429 10TH ST NW</div>
        </div>
        <div class="contact-info-holder">
            <h2>CONTACT</h2>
            <div>123 456 7890</div>
        </div>
        <div class="contact-info-holder">
            <h2>HOURS</h2>
            <div>MON - SUN</div>
            <div>11AM - 10PM</div>
        </div>
    </div>`

    return element
}

export default printContactContent

