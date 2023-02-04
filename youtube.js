
const mainSearch = document.querySelector('.mainsearch');

 function mainsearch () {
    mainSearch.style.border = '1px solid blue';
}

mainSearch.addEventListener('click',mainsearch);

function mainsearch2(){
    mainSearch.style.border = 'none';
}
mainSearch.addEventListener('mouseout',mainsearch2);

const main_vid = document.querySelector('.main-vid');

function hoverEffect(){
    main_vid.style.transform = 'scale(1.5)';
}


const scrollButton = document.querySelector('.bottomm');

function myLeftScrollBar(){
    const element = document.querySelector('.up-nav');
    element.scrollLeft += 50;
    element.
    console.log(element2.scrollWidth);
}

scrollButton.addEventListener('click',myLeftScrollBar);

const scrollDiv = document.querySelector('.scrollright');
const scrollButton2 = document.querySelector('.topp');

function myRightScrollBar(){
    const element2 = document.querySelector('.up-nav');
    element2.scrollLeft -= 50;
}
scrollButton2.addEventListener('click',myRightScrollBar);

