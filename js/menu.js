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
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    introDescription.innerHTML = `Join us for the Node.js Code Camp 2023, where developers from around the world will come together to learn, network, and innovate.<br> We're excited to offer a unique opportunity for developers to connect with like-minded individuals who share their passion for backend development, and to gain insights from expert speakers and interactive workshops. <br> Our goal is to foster a community of professionals dedicated to driving innovation and growth in the field of backend development. So whether you're a seasoned pro or just starting out, we invite you to be a part of this exciting event and help shape the future of Node.js development.<br>
    Together, we'll explore the latest trends, technologies, and best practices in backend development, and work towards building a stronger and more dynamic community of developers.`;
    aboutFooterLogo.setAttribute('src', './images/logos/icon-only-white.png');
  } else {
    introDescription.innerHTML = 'Join us for the Node.js Code Camp 2023, where developers from around the world will come together to learn, network, and innovate. We\'re excited to offer a unique opportunity for developers to connect with like-minded individuals.';
    aboutFooterLogo.setAttribute('src', './images/logos/icon-only-black.png');
  }
});

// trigger the resize event on page load
window.dispatchEvent(new Event('resize'));
