import { createReviewsSwiper } from './swiper-config';

const reviewsSwiperElement = document.querySelector('.js-reviews-swiper');

if (reviewsSwiperElement) {
  createReviewsSwiper(reviewsSwiperElement);
}
