document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.js-header');
  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      header.classList.add('header--small');
    } else {
      header.classList.remove('header--small');
    }
  });

  if (window.scrollY > 0) {
    header.classList.add('header--small');
  }
});
