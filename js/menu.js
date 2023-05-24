const hamburgerIcon = document.querySelector('.mobile_menu');
const body = document.querySelector('body');
const closeIcon = document.querySelector('.menu-close');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-item');
const menu = document.querySelector('.menu-main');
const introDescription = document.querySelector('.intro-description-about');
const aboutFooterLogo = document.querySelector('.copyright-logo-about');

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


// check the width of the viewport on page load and resize
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    introDescription.innerHTML = `The Global Summit brings together the community of experts, academics, and activists who comprise the Creative Commons affiliate network in a different country every two years.<br>
    This year, we hope to expand our invitation list including organizations and individuals who want to work with us on shared projects that advance the cause of the Commons, free culture and open knowledge.<br>
    So if you're active and engaged in the worlds of open content and knowledge - free software advocates, wikipedians, Open knowledge, galleries, libraries, museums, archives, governments and foundations, lawyers, and activists - we hope you'll consider joining us this year to build a stronger, more vibrant commons together`;
    aboutFooterLogo.setAttribute('src', './images/logos/icon-only-white.png')
  } else {
    introDescription.innerHTML = `The Global Summit brings together the community of
    experts, academics, and activists who comprise the Creative Commons affiliate network in a different
    country every two years.
    This year, we hope to expand our invitation list including organizations and individuals.`
    aboutFooterLogo.setAttribute('src', './images/logos/icon-only-black.png')
  }
});

// trigger the resize event on page load
window.dispatchEvent(new Event('resize'));
