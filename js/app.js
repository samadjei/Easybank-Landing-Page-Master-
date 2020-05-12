// Hamburger   Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

// Hamburger Menu
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('toggle');
});