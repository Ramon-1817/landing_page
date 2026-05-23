let items = document.querySelectorAll('.slider .item');
let lastPosition = items.length - 1;
let firstPosition = 0;

const darkToggle = document.getElementById('darkmode-toggle');

let active = darkToggle.checked ? 0 : 1;

darkToggle.addEventListener('change', () => {
    active = darkToggle.checked ? 0 : 1;

    setSlider();
});

const setSlider = () => {
    let oldActive = document.querySelector('.slider .item.active');
    if(oldActive) oldActive.classList.remove('active');
    requestAnimationFrame(() => {
        items[active].classList.add('active');
    });
}

setSlider();

const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}
setDiameter();
window.addEventListener('resize', setDiameter);

const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

hamburguer.addEventListener('click', () => nav.classList.toggle('active'));