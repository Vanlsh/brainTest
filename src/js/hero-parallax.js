const gearWhite = document.querySelector('.hero-gear-white');
const gearRed = document.querySelector('.hero-gear-red');
const robot = document.querySelector('.hero-robot');
const phone = document.querySelector('.hero-phone');
const atom = document.querySelector('.hero-atom');
const h2o = document.querySelector('.hero-h2o');
const a = document.querySelector('.hero-a');
const gameName = document.querySelector('.game-name');
const xo = document.querySelector('.hero-xo');
const arrowRed = document.querySelector('.arrow-red');
const arrowWhite = document.querySelector('.hero-arrow-white');

const title = document.querySelector('.hero-title');

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    gameName.classList.add('text-pop-up-top');
  }
  gearWhite.style.transform = `translateX(${scrollPosition * 0.4}px) rotate(${
    scrollPosition * 0.3
  }deg)`;
  gearRed.style.transform = `translateX(${-scrollPosition * 0.4}px) rotate(${
    -scrollPosition * 0.4
  }deg)`;
  robot.style.transform = `translateX(${-scrollPosition * 0.3}px)`;
  a.style.transform = `translateX(${-scrollPosition * 0.3}px)`;
  xo.style.transform = `translateX(${scrollPosition * 0.2}px)`;
  arrowWhite.style.transform = `translateX(${-scrollPosition * 0.2}px) rotate(${
    scrollPosition * 0.1
  }deg)`;
  arrowRed.style.transform = `translateX(${scrollPosition * 0.2}px) rotate(${
    scrollPosition * 0.1
  }deg)`;
  h2o.style.transform = `translateX(${-scrollPosition * 0.2}px) rotate(${
    -scrollPosition * 0.1
  }deg)`;
  phone.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  atom.style.transform = `translate(${scrollPosition * 0.1}px, ${
    scrollPosition * 0.05
  }px)`;
  a.style.transform = `translate(${scrollPosition * 0.3}px, ${
    scrollPosition * 0.2
  }px)`;
});

document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with the class 'hero-element'
  const heroElements = document.querySelectorAll('.hero-element');

  // Function to add the 'hero-animate' class after a short delay
  setTimeout(() => {
    heroElements.forEach(element => {
      element.classList.add('hero-animate');
    });
  }, 100); // Delay in milliseconds before animation starts
  heroElements.forEach(element => {
    element.classList.remove('hero-animate');
  });
});
