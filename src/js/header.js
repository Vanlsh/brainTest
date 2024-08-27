document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.js-header');
  const scrollPosition = window.scrollY;

  document.addEventListener('scroll', function () {
    if (scrollPosition > 0) {
      header.classList.add('header--small');
    } else {
      header.classList.remove('header--small');
    }
  });

  if (scrollPosition > 0) {
    header.classList.add('header--small');
  }
});
