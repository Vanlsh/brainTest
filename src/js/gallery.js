import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import { createGallerySwiper } from './swiper-config';

const gallerySwiperElement = document.querySelector('.js-gallery-swiper');

if (gallerySwiperElement) {
  const gallerySwiper = createGallerySwiper(gallerySwiperElement);
  gallerySwiper.pagination.init();
}

const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,
});
