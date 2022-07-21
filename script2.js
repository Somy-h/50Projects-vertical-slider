const leftBtnDown = document.getElementById('left-button-down');
const rightBtnUp = document.getElementById('right-button-up');

const rightSlidesContainer = document.querySelector('.right-slide-container');
const leftSlidesContainer = document.querySelector('.left-slide-container');
const rightSlides = document.querySelectorAll('.right-slide');
const leftSlides = document.querySelectorAll('.left-slide');

const slideIndex = new SlideHandler();

/* left slides move to the - top position */
leftSlidesContainer.style.top = `-${(leftSlides.length -1) * 100}vh`;

/* Click: Right Button Up */
rightBtnUp.addEventListener('click', () => {
  let index = slideIndex.increaseSlideIndex();
  displayNextSlides(index);

});

/* Click: Left Button Down */
leftBtnDown.addEventListener('click', () => {
  let index = slideIndex.decreaseSlideIndex();
  displayNextSlides(index);
});

function displayNextSlides(index) {
  const slideHeight = leftSlides[index].clientHeight;
  rightSlidesContainer.style.transform = `translateY(-${index * slideHeight}px)`;
  leftSlidesContainer.style.transform = `translateY(${index * slideHeight}px)`;

  // Replace the buttons have been moved
  rightBtnUp.style.top = `${(slideHeight/2 - 60) +(index * slideHeight)}px`;
  leftBtnDown.style.top = `${(slideHeight/2) +(index * slideHeight)}px`;
}


function SlideHandler() {
  let _currentSlideIndex = 0;
  this.increaseSlideIndex = function() {
     _currentSlideIndex = (++_currentSlideIndex % rightSlides.length);
    return _currentSlideIndex;
  }

  this.decreaseSlideIndex = function() {
    _currentSlideIndex = (_currentSlideIndex <= 0) ? (rightSlides.length - 1) : --_currentSlideIndex;
    return _currentSlideIndex;
  }
}