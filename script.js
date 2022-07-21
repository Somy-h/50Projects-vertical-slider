const leftBtnDown = document.getElementById('left-button-down');
const rightBtnUp = document.getElementById('right-button-up');
const rightSlides = document.querySelectorAll('.right-slide');
const leftSlides = document.querySelectorAll('.left-slide');

const slideIndex = new SlideHandler();

/* Right Button Click */
rightBtnUp.addEventListener('click', () => {
  let index = slideIndex.increaseSlideIndex();
  console.log(index);

  css(rightSlides[index], {'order': '-1'});
  css(leftSlides[index], {'order': '-1'});
});

/* Left Button Click */
leftBtnDown.addEventListener('click', () => {
  let index = slideIndex.decreaseSlideIndex();
  console.log(index);

  css(rightSlides[index], {'order': '-1'});
  css(leftSlides[index], {'order': '-1'});
});

// Setting css attributes
function css(element, style) {
  for (const property in style) {
    element.style[property] = style[property];
  }
}

/* Function for SlideHandler */
function SlideHandler() {
  let _currentSlideIndex = 0;

  this.increaseSlideIndex = function() {
    // setting order back to default order
    css(rightSlides[_currentSlideIndex], {'order': `${_currentSlideIndex}`});
    css(leftSlides[_currentSlideIndex], {'order': `${_currentSlideIndex}`});
    _currentSlideIndex = (++_currentSlideIndex % rightSlides.length);
    return _currentSlideIndex;
  }

  this.decreaseSlideIndex = function() {
    // debugger;
    // setting order back to default order
    css(rightSlides[_currentSlideIndex], {'order': `${_currentSlideIndex}`});
    css(leftSlides[_currentSlideIndex], {'order': `${_currentSlideIndex}`});
    _currentSlideIndex = (_currentSlideIndex <= 0) ? (rightSlides.length - 1) : --_currentSlideIndex;
    return _currentSlideIndex;
  }
}