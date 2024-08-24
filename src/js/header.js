document.addEventListener('scroll', function () {
  const header = document.querySelector('.js-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('header--small');
  } else {
    header.classList.remove('header--small');
  }
});
