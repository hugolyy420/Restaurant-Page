function printMenuContent () {
    const element = document.createElement('div');
    element.classList.add('menu-items-holder');

    element.innerHTML = `<div class="menu-item">
    <img src="./images/menu-image-1.jpg" alt="menu-food-item" class="menu-food-picture">
    <div class="menu-caption">
        <h2>BEEF SUSHI</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae neque ad voluptatibus harum, nemo sapiente blanditiis voluptas porro autem nihil. Tempora quidem officia cupiditate assumenda dolore, error saepe molestias.</div>
    </div>
</div>
<div class="menu-item">
    <div class="menu-caption">
        <h2>SASHIMI</h2>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, fugiat qui possimus libero, minima sequi excepturi sit asperiores, quaerat incidunt id cumque mollitia odit aperiam maxime ex obcaecati impedit ullam.</div>
    </div>
    <img src="./images/menu-image-2.jpg" alt="menu-food-item" class="menu-food-picture">
</div>
<div class="menu-item">
    <img src="./images/menu-image-3.jpg" alt="menu-food-item" class="menu-food-picture">
    <div class="menu-caption">
        <h2>RAMEN</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sed, sint quo incidunt harum consequatur assumenda eius enim ab adipisci commodi velit quia hic dolore quis ipsa dolorem fugit voluptatibus.</div>
    </div>
</div>  `

    return element
}

export default printMenuContent