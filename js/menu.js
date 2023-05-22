const hamburgerIcon = document.querySelector(".mobile_menu");
const closeIcon = document.querySelector(".menu-close");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-item");
const menu = document.querySelector(".menu-main");

function menuOpen() {
    menu.classList.add('open_menu');
    menuList.classList.add('open_menu');
    hamburgerIcon.classList.add('hide');
}

function menuClose() {
    menu.classList.remove('open_menu');
    menuList.classList.remove('open_menu');
    hamburgerIcon.classList.remove('hide');
}

hamburgerIcon.addEventListener('click', menuOpen);
closeIcon.addEventListener('click', menuClose);

for (const item of menuItems) {
    item.addEventListener('click', menuClose);
}