import { IS_OPEN, MAIN_PAGE } from './constants';

const ref = {
  closeButton: document.querySelector('.js-close-burger-button'),
  openButton: document.querySelector('.js-open-burger-button'),
  burgerContainer: document.querySelector('.js-burger'),
  navList: document.querySelector('.js-burger-nav-list'),
};

const handleKeyDown = e => {
  if (e.code === 'Escape') {
    closeBurger();
  }
};

const handleLink = e => {
  const target = e.target;
  if (target.tagName === 'A') {
    closeBurger();
    console.log(window.location.pathname);
    console.log('MAIN_PAGE', MAIN_PAGE);
    const location = window.location.pathname;
    window.localStorage.setItem('test', location);
    if (MAIN_PAGE !== location) {
      console.log(MAIN_PAGE !== location);
      e.preventDefault();
      window.location.href = MAIN_PAGE + target.getAttribute('href');
    }
  }
};

const handleBackdrop = e => {
  if (e.target === e.currentTarget) {
    closeBurger();
  }
};

const closeBurger = () => {
  window.removeEventListener('keydown', handleKeyDown);
  document.body.removeAttribute('style');
  ref.burgerContainer.classList.remove(IS_OPEN);
};

const openBurger = () => {
  window.addEventListener('keydown', handleKeyDown);
  document.body.style.overflow = 'hidden';
  ref.burgerContainer.classList.add(IS_OPEN);
};

ref.closeButton.addEventListener('click', closeBurger);
ref.openButton.addEventListener('click', openBurger);
ref.burgerContainer.addEventListener('click', handleBackdrop);
ref.navList.addEventListener('click', handleLink);
