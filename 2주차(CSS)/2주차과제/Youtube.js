const bookBtn = document.querySelector('.bookmark-btt');
const container2 = document.querySelector('.container2');
// const label = document.querySelector('label');

bookBtn.addEventListener('click', function(){
    container2.style.left = 0;
    //label.style.opacity = 0;
})

bookBtn.addEventListener('blur', function(){
    container2.style.left = '-200px' ;
    // label.style.opacity = 1;
})