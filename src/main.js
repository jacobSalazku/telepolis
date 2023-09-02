
const hamburgerButton = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.querySelector('body');
const seeMoreButton = document.querySelector('.see-more');

// Get the element with the "hidden" class
const hiddenGallery = document.querySelector('.hidden');




// toggle function for mobile-nav
function toggleMobileNav() {
  hamburgerButton.classList.toggle('active');
  mobileNav.classList.toggle('active');
  body.classList.toggle('no-scroll');
 
}


hamburgerButton.addEventListener('click', toggleMobileNav);

// Function to handle "See More" button
seeMoreButton.addEventListener('click', () => {
  // Remove the "hidden" class from the hidden gallery element
  hiddenGallery.classList.remove('hidden');
});



// carousel



