const headerNavList = document.querySelector('.js-header-nav-list');
const header = document.querySelector('.js-header');
const burgerNavList = document.querySelector('.js-burger-nav-list');

const isMainPage = window.location.pathname === '/brainTest/';

const scrollToSection = targetId => {
  if (targetId === '#') {
    window.scrollTo({ top: 0 });
    return;
  }
  const headerHeight = window.innerWidth <= 1440 ? 58 : 68;

  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const targetPosition = targetElement.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
    });
  }
};

const navigateToPage = e => {
  e.preventDefault();

  const target = e.target;
  if (target.tagName === 'A') {
    const href = target.getAttribute('href').split('#');
    const targetId = '#' + href[href.length - 1];
    if (isMainPage) {
      scrollToSection(targetId);
    } else {
      window.location.href = `/brainTest/${targetId}`;
    }
  }
};

headerNavList.addEventListener('click', navigateToPage);
burgerNavList.addEventListener('click', navigateToPage);

if (isMainPage && window.location.hash) {
  scrollToSection(window.location.hash);
}
