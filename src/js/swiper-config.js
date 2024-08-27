async function initializeSwipers() {
  try {
    const {
      default: Swiper,
      Autoplay,
      Pagination,
      Navigation,
      Scrollbar,
      Keyboard,
    } = await import('swiper/bundle');
    await import('swiper/css/bundle');

    Swiper.use([Autoplay, Pagination, Navigation, Scrollbar, Keyboard]);

    const gallerySwiperElement = document.querySelector('.js-gallery-swiper');

    if (gallerySwiperElement) {
      const gallerySwiper = new Swiper(gallerySwiperElement, {
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
      gallerySwiper.pagination.init();
    }

    const reviewsSwiperElement = document.querySelector('.js-reviews-swiper');

    if (reviewsSwiperElement) {
      new Swiper(reviewsSwiperElement, {
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
  } catch (error) {
    console.error('Error loading Swiper:', error);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  initializeSwipers();
});
