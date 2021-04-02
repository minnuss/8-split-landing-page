const page = document.querySelector('.page');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => {
    page.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    page.classList.remove('hover-left');
});


right.addEventListener('mouseenter', () => {
    page.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    page.classList.remove('hover-right');
});

