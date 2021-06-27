// const buttonLeft = document.querySelector('#sliderLeft');
// const buttonRight = document.querySelector('#sliderRight');
// const itemsList = document.querySelector('#slider');
// let items = document.querySelector('.assortment__item');

// let step = items[0].getBoundingClientRect().width;
// const minRight = 0;
// const maxRight = (items.length - 1) * step;

// let currentRight = 0;
// let currentStep=0;

// const listStyles = getComputedStyle(itemsList);
// const initialTransition = `${listStyles["transition-property"]} ${listStyles["transition-duration"]}`;


// itemsList.style.right = currentRight;

// function updateSlider(){
//   itemsList.style.transition = 'none';
//   step = items[0].getBoundingClientRect().width;
//   const maxRight = (items.length - 1) * step;
//   currentRight = step*currentStep;
//   itemsList.style.right = `${currentRight}px`;
// }

// window.addEventListener("resize",updateSlider)


// buttonRight.addEventListener('click', e => {
//   e.preventDefault();
//   itemsList.style.transition = initialTransition
//   if (currentRight == maxRight) {
//     currentRight == minRight;
//     itemsList.style.right = `${currentRight}px`;
//     return;
//   }


//   if (currentRight < maxRight) {
//     currentRight += step;
//     itemsList.style.right = `${currentRight}px`;
//     currentStep++;
//   }
// })

// buttonLeft.addEventListener('click', e => {
//   e.preventDefault();

//   if (currentRight == minRight) {
//     currentRight -= step;
//     itemsList.style.right = `${currentRight}px`;
//     currentStep = items.length - 1;
//     return;
//   }

//   if (currentRight > minRight) {
//     currentRight = maxRight;
//     itemsList.style.right = `${currentRight}px`;
//     currentStep--
    
//   }
// })












const slider = $('.assortment__list').bxSlider({
  pager:false,
  controls:false
});

$('.assortment__control--left').click(e=>{
  e.preventDefault();
  slider.goToPrevSlide();
})
$('.assortment__control--right').click(e=>{
  e.preventDefault();
  slider.goToNextSlide();
})