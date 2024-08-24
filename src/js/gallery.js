import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const gallerySliderElement = document.querySelector('.js-gallery-swiper');
const gallerySliderProps = {
  speed: 700,
  spaceBetween: 17,
  slidesPerView: 1,
  pagination: {
    el: '.gallery-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.gallery-btn-next',
    prevEl: '.gallery-btn-prew',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
};

const gallerySlider = new Swiper(gallerySliderElement, gallerySliderProps);
gallerySlider.pagination.init();

const prevElButton = document.querySelector('.gallery-btn-next');
const nextElButton = document.querySelector('.gallery-btn-prew');

console.log(prevElButton);
console.log(nextElButton);
