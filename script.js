const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelectorAll('.slide');

let index = 0;

function nextSlide() {
    index++;

    if (index > slider.length - 1) {
        index = 0;
    }
    slider.forEach((slide) => {
        slide.style.display = 'none';
    });
    slider[index].style.display= 'flex'
}

function prevSlide() {
    index--;
    if (index <0) {
        index = slider.length-1;
    }
    slider.forEach((slide) => {
        slide.style.display = 'none';
    });
    slider[index].style.display= 'flex'
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);