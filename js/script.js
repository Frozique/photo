const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-nav__menu');
const closeBtn = document.querySelector('.menu-close-btn');
const searchBtn = document.querySelector('.header__search-btn');
const searchCloseBtn = document.querySelector('.search__close-btn');
const search = document.querySelector('.search');

burger.addEventListener('click', function() {
  sideMenu.classList.toggle('side-nav__menu--active');
  document.body.classList.toggle('stop-scroll');
});

closeBtn.addEventListener('click', function() {
  sideMenu.classList.toggle('side-nav__menu--active');
  document.body.classList.remove('stop-scroll');
});

searchBtn.addEventListener('click', function() {
  search.classList.toggle('search--active');
})

searchCloseBtn.addEventListener('click', function() {
  search.classList.toggle('search--active');
})
