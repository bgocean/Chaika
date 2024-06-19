"use strict";

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

// Модалка
document.addEventListener("DOMContentLoaded", function () {
  // Получаем модальное окно
  const modal = document.getElementById("modal");

  // Получаем кнопку, которая открывает модальное окно
  const btn = document.getElementById("openModal");

  // Получаем элемент <span>, который закрывает модальное окно
  const span = document.getElementsByClassName("close")[0];

  // Когда пользователь нажимает на кнопку, открываем модальное окно 
  btn.onclick = function () {
    var iframe = document.getElementById("documentFrame");
    iframe.src = "./files/ДОГОВІР-ОФЕРТА.pdf"; // Убедитесь, что путь к файлу правильный
    modal.style.display = "block";
  }

  // Когда пользователь нажимает на <span> (x), закрываем модальное окно
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Когда пользователь нажимает в любом месте вне модального окна, закрываем его
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});






document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        } else {
          if (input.value === "") {
            formAddError(input);
            error++;
          }
        }
      }
    }
    function formAddError(input) {
      input.parentElement.classList.add("_error");
      input.classList.add("_error");
    }

    function formRemoveError(input) {
      input.parentElement.classList.remove("_error");
      input.classList.remove("_error");
    }

    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
  }
});
