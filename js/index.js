// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// const slides = Array.from(slider.querySelectorAll('img'));
// const slideCount = slides.length;
// let slideIndex = 0;

// prevButton.addEventListener('click', () => {
//   slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//   slide();
// });

// nextButton.addEventListener('click', () => {
//   slideIndex = (slideIndex + 1) % slideCount;
//   slide();
// });

// const slide = () => {
//   const imageWidth = slider.clientWidth;
//   const slideOffset = -slideIndex * imageWidth;
//   slider.style.transform = `translateX(${slideOffset}px)`;
// }

// window.addEventListener('load', () => {
//   slide();
// }); это все для слайдера

document.addEventListener("DOMContentLoaded", function() {
  // Находим элемент, который нужно анимировать
  var animatedElement = document.querySelector('.animated-element');

  // Функция для проверки, находится ли элемент в видимой области
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Функция для запуска анимации, когда элемент видим
  function animateIfVisible() {
    if (isElementInViewport(animatedElement)) {
      animatedElement.style.transform = 'translateX(0)';
    }
  }

  // Запускаем проверку при загрузке страницы
  animateIfVisible();

  // Запускаем проверку при прокрутке страницы
  window.addEventListener('scroll', animateIfVisible);
});
