function printHomePageContent () {
    const element = document.createElement('div');
    element.classList.add('headline');

    element.innerHTML = `<div class="japanese-headline">おもてなし</div>
    <div class="english-headline">HOSPITALITY</div>
    <button class="book-button">BOOK A TABLE</button>`

    return element
}

export default printHomePageContent