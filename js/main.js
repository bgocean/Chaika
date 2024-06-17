$(document).ready(function () {
  $(".header__menu, .header__menu-mobil, .footer__menu").on(
    "click",
    "a",
    function (event) {
      event.preventDefault();
      let id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    }
  );
});

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".header__menu-mobil");
const menuMobil = document.querySelector(".header__menu-mobil");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--open");  
});
