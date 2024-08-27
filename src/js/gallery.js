import { createGallerySwiper } from './swiper-config';

const gallerySwiperElement = document.querySelector('.js-gallery-swiper');

if (gallerySwiperElement) {
  const gallerySwiper = createGallerySwiper(gallerySwiperElement);
  gallerySwiper.pagination.init();
}

function initializeGLightbox() {
  Promise.all([import('glightbox'), import('glightbox/dist/css/glightbox.css')])
    .then(([{ default: GLightbox }]) => {
      const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
      });
    })
    .catch(err => {
      console.error('Error loading GLightbox:', err);
    });
}
window.addEventListener('DOMContentLoaded', initializeGLightbox);
