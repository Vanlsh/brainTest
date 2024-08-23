import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

Swiper.use([Autoplay]);
const swiper = new Swiper('.swiper', {
  // Optional parameters
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
