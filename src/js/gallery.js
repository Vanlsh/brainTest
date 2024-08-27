function initializeGLightbox() {
  Promise.all([import('glightbox'), import('glightbox/dist/css/glightbox.css')])
    .then(([{ default: GLightbox }]) => {
      const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
      });
    })
    .catch(err => {
      console.error('Error loading GLightbox:', err);
    });
}
window.addEventListener('DOMContentLoaded', initializeGLightbox);
