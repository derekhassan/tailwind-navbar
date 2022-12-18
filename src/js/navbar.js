const navBarCloseBtn = document.querySelector('.js-navbar-close');
const navBarOpenBtn = document.querySelector('.js-navbar-open');
const navBarMenu = document.querySelector('.js-navbar-menu');

const HIDE_MENU_CLASS = 'translate-x-full';
const OPACITY_CLASS = 'sm:opacity-0';

navBarCloseBtn.addEventListener('click', () => {
    navBarMenu.classList.add(HIDE_MENU_CLASS);
    navBarMenu.classList.add(OPACITY_CLASS);
});

navBarOpenBtn.addEventListener('click', () => {
    navBarMenu.classList.remove(HIDE_MENU_CLASS);
    navBarMenu.classList.remove(OPACITY_CLASS);
});
