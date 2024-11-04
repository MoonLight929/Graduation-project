const container = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slideLocal');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
let offset = 0;
let slideIncrement = 0;
let slideDecrement = slides.length - 1;

arrRight.addEventListener('click', () => {
    arrRight.disabled = true;
    offset = slides[0].offsetWidth;
    container.style.transition = "left ease-in-out 500ms";
    container.style.left = -offset + 'px';
    setTimeout(() => {
        container.style.transition = "none";
        slides[slideIncrement].style.order = slides.length - 1;
        container.style.left = 0;
        slideIncrement++;
        slideDecrement = slideIncrement - 1;
        if (slideIncrement === slides.length) {
            slideIncrement = 0;
            slides.forEach(slide => {
                slide.style.order = "initial";
            });
        }
        arrRight.disabled = false;
    }, 500);
});

arrLeft.addEventListener('click', () => {
    arrLeft.disabled = true;
    offset = slides[0].offsetWidth;
    container.style.transition = "none";
    if (slideDecrement < 0) {
        slides.forEach(slide => {
            slide.style.order = "initial";
        });
        slideDecrement = slides.length - 1;
    }
    slides[slideDecrement].style.order = "-1";
    container.style.left = -offset + 'px';
    setTimeout(() => {
        container.style.transition = "left ease-in-out 500ms";
        container.style.left = 0;
    }, 1);
    setTimeout(() => {
        slideDecrement--;
        slideIncrement = slideDecrement + 1;
        arrLeft.disabled = false;
    }, 500)
});