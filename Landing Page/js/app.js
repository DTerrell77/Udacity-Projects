/* declare variables from the DOM */
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container'); 

/* add hover-left class on mouse enter*/
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

/* remove hover-left class on mouse leave*/
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

/* add hover-right class on mouse enter*/
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

/* remove hover-right class on mouse leave*/
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});









