function loadAOS() {
  import('aos')
    .then(AOSModule => {
      const AOS = AOSModule.default;
      AOS.init({
        offset: 120,
        delay: 100,
        duration: 1000,
        easing: 'ease',
        once: true,
      });

      import('aos/dist/aos.css');
    })
    .catch(error => console.error('Failed to load AOS:', error));
}
window.addEventListener('DOMContentLoaded', () => {
  loadAOS();
});
