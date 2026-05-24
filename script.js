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
        requestAnimationFrame(() => {
            animateSplitTitle();
        });
    });
}

setSlider();

// Animação do texto

function animateSplitTitle() {

    const activeTitle = document.querySelector('.item.active .split-title');

    if (!activeTitle) return;

    // RESET TOTAL DO HTML
    SplitType.revert(activeTitle);

    // NOVO SPLIT
    const split = new SplitType(activeTitle, {
        types: 'words, chars'
    });

    // ESTADO INICIAL
    gsap.set(split.chars, {
        opacity: 0,
        y: 120,
    });

    // ANIMAÇÃO
    gsap.to(split.chars, {
        opacity: 1,
        y: 0,
        delay: 0.97,
        stagger: 0.035,
        duration: 3.1,
        ease: "expo.out"
    });
}

animateSplitTitle();

// Clique do menu hamburguer

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