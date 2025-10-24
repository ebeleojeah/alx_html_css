// Select the hamburger and navigation menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event to toggle classes
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');   // animate hamburger icon
  navLinks.classList.toggle('active');    // show/hide nav menu
});
