import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

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

//dynamic import
/* document.addEventListener('DOMContentLoaded', async () => {
  const { createGallerySwiper } = await import('./swiper-config');

  const gallerySwiperElement = document.querySelector('.js-gallery-swiper');

  if (gallerySwiperElement) {
    const gallerySwiper = createGallerySwiper(gallerySwiperElement);
    gallerySwiper.pagination.init();
  }
}); */

// Initialize GLightbox
const lightbox = GLightbox({
  selector: '.glightbox', // This will look for all anchors with this class
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
});
