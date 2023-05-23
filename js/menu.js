const hamburgerIcon = document.querySelector('.mobile_menu');
const body = document.querySelector('body');
const closeIcon = document.querySelector('.menu-close');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-item');
const menu = document.querySelector('.menu-main');

function menuOpen() {
  menu.classList.add('open_menu');
  menuList.classList.add('open_menu');
  hamburgerIcon.classList.add('hide');
  body.classList.add('scrollStop');
}

function menuClose() {
  menu.classList.remove('open_menu');
  menuList.classList.remove('open_menu');
  hamburgerIcon.classList.remove('hide');
  body.classList.remove('scrollStop');
}

hamburgerIcon.addEventListener('click', menuOpen);
closeIcon.addEventListener('click', menuClose);

menuItems.forEach((item) => {
  item.addEventListener('click', menuClose);
});