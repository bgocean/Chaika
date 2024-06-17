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
