document.addEventListener('DOMContentLoaded', async () => {
  const { createReviewsSwiper } = await import('./swiper-config');

  const reviewsSwiperElement = document.querySelector('.js-reviews-swiper');

  if (reviewsSwiperElement) {
    createReviewsSwiper(reviewsSwiperElement);
  }
});
