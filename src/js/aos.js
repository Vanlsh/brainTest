// Function to handle lazy loading of AOS
function loadAOS() {
  import('aos')
    .then(AOSModule => {
      const AOS = AOSModule.default;
      // Initialize AOS with your configuration
      AOS.init({
        offset: 120,
        delay: 100,
        duration: 1000,
        easing: 'ease',
        once: true,
      });

      // Import AOS CSS dynamically
      import('aos/dist/aos.css');
    })
    .catch(error => console.error('Failed to load AOS:', error));
}

// Scroll event listener
window.addEventListener('scroll', () => {
  // Adjust this condition based on when you want to load AOS
  if (window.scrollY > 200) {
    loadAOS();
    // Remove the event listener after loading AOS to avoid redundant calls
    window.removeEventListener('scroll', arguments.callee);
  }
});
