const slider = document.querySelector('.slider');
const sliderBottom = document.querySelector('.slider__bottom');
const sliderTop = document.querySelector('.slider__top');
const slidesCount = sliderTop.querySelectorAll('div').length;
const dwnBtn = document.querySelector('.back-btn');
const upBtn = document.querySelector('.forward-btn');
let audio = new Audio('./sound/klik.mp3')
let activeSlideIndex = 0;
  
console.log(slidesCount);
// sliderLeft.style.top = '-200vh'
sliderBottom.style.left = `-${(slidesCount-1)*100}vw`;

upBtn.addEventListener('click', function () {
    nextSlide('right');
    audio.play();
});
dwnBtn.addEventListener('click', function () {
    nextSlide('left');
    audio.play();
});

function nextSlide(direction){
    // console.log(direction);

if (direction === 'right'){
    activeSlideIndex++
    if(activeSlideIndex === slidesCount){
        activeSlideIndex = 0;

    }
} else if (direction === 'left'){
    activeSlideIndex--
    if(activeSlideIndex < 0){
        activeSlideIndex = slidesCount -1;
    }
}

const wightWindow = slider.clientWidth;
console.log(wightWindow);

sliderBottom.style.transform = `translateX(${activeSlideIndex*wightWindow}px)`;
sliderTop.style.transform = `translateX(-${activeSlideIndex*wightWindow}px)`;

};