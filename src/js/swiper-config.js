// src/swiper-config.js
import Swiper from 'swiper';
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  Keyboard,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';

Swiper.use([Autoplay, Pagination, Navigation, Scrollbar, Keyboard]);

export function createReviewsSwiper(selector) {
  return new Swiper(selector, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      1440: {
        slidesPerView: 4,
      },
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 1500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

export function createGallerySwiper(selector) {
  return new Swiper(selector, {
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
  });
}
