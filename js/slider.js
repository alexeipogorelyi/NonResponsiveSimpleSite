const btnSliderFirst = document.querySelector('.slider-button-ft');
const btnSliderSecond = document.querySelector('.slider-button-sc');
const btnSliderThird = document.querySelector('.slider-button-th');

const sliderFirst = document.querySelector('.slider-first');
const sliderSecond = document.querySelector('.slider-second');
const sliderThird = document.querySelector('.slider-third');

btnSliderFirst.addEventListener('click', function() {

    btnSliderFirst.classList.add('current-btn');
    
    if(btnSliderSecond.classList.contains('current-btn')) {
        btnSliderSecond.classList.remove('current-btn');
    }
        
    if(btnSliderThird.classList.contains('current-btn')) {
        btnSliderThird.classList.remove('current-btn');
    }

    sliderFirst.classList.add('slider-current');

    if(sliderSecond.classList.contains('slider-current')) {
        sliderSecond.classList.remove('slider-current');
    }

    if(sliderThird.classList.contains('slider-current')) {
        sliderThird.classList.remove('slider-current');
    }
})

btnSliderSecond.addEventListener('click', function() {
    btnSliderSecond.classList.add('current-btn');
    
    if(btnSliderFirst.classList.contains('current-btn')) {
        btnSliderFirst.classList.remove('current-btn');
    }
        
    if(btnSliderThird.classList.contains('current-btn')) {
        btnSliderThird.classList.remove('current-btn');
    }

    sliderSecond.classList.add('slider-current');

    if(sliderFirst.classList.contains('slider-current')) {
        sliderFirst.classList.remove('slider-current');
    }

    if(sliderThird.classList.contains('slider-current')) {
        sliderThird.classList.remove('slider-current');
    }
})

btnSliderThird.addEventListener('click', function() {
    btnSliderThird.classList.add('current-btn');
    
    if(btnSliderFirst.classList.contains('current-btn')) {
        btnSliderFirst.classList.remove('current-btn');
    }
        
    if(btnSliderSecond.classList.contains('current-btn')) {
        btnSliderSecond.classList.remove('current-btn');
    }

    sliderThird.classList.add('slider-current');

    if(sliderFirst.classList.contains('slider-current')) {
        sliderFirst.classList.remove('slider-current');
    }

    if(sliderSecond.classList.contains('slider-current')) {
        sliderSecond.classList.remove('slider-current');
    }
})