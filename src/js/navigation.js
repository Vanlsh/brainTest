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
      sessionStorage.setItem('scrollToId', targetId);
      window.location.href = `/brainTest/`;
    }
  }
};

headerNavList.addEventListener('click', navigateToPage);
burgerNavList.addEventListener('click', navigateToPage);

const scrollToId = sessionStorage.getItem('scrollToId');

if (isMainPage && scrollToId) {
  scrollToSection(scrollToId);
  sessionStorage.removeItem('scrollToId');
}
