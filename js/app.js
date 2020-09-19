const sideNav = document.querySelector('.side-nav');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  sideNav.classList.add('side-nav-open');
});
navClose.addEventListener('click', () => {
  sideNav.classList.remove('side-nav-open');
});

const navHeight = nav.getBoundingClientRect().height + 12;
console.log(nav, navHeight);
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add('nav-fixed');
  } else {
    nav.classList.remove('nav-fixed');
  }
});
