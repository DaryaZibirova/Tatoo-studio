const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__menu');

if(iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('header__icon_active');
        menuBody.classList.toggle('header__menu_active');
    });
}